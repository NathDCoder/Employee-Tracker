const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3012;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'Root123',
      database: 'employees_db'
    },
    console.log(`Connected to employee_db database.`)
  );

  app.get('/api/employee', (req, res) => {
    const sql = `SELECT first_name, last_name, role_id AS position FROM employee`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });












  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  