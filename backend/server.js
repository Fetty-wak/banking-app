const express = require('express');
const cors = require('cors');
const db = require('./database');  
const bcrypt = require('bcrypt'); 


const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Banking app backend is running ✅');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// sign up method
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate all fields are present
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL query to insert user into DB
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    
    // Execute the query
    db.run(sql, [username, email, hashedPassword], function (err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint')) {
          return res.status(409).json({ error: 'Username or email already exists.' });
        }
        return res.status(500).json({ error: 'Database error.' });
      }

      // Send success response
      res.status(201).json({ message: 'User created successfully.', userId: this.lastID });
    });

  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// login method
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // 1. Look for the user in the database
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.get(sql, [email], async (err, user) => {
    if (err) {
      console.error('Database error during login:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // 2. Compare entered password with stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // 3. Send success response (in real apps, you'd generate a session or token)
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        balance: user.balance,
      },
    });
  });
});
