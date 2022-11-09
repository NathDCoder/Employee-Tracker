const connection = require('./db/connection');
const express = require('express');
const inquirer = require('inquirer');
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
    console.log(`Connected to employee_db database.`),
    questionaire()
  ); 


  const questionaire = () => {
    inquirer.prompt([
      {
        name: 'choices',
        type: 'list',
        message:'Which option would you like to select?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add department',
          'Add role',
          'Add employee',
          'Update department',
          'Update role',
          'Update employee',
          'exit'
        ]
      }
    ])
      .then((decisions) => {
        const {choices} = decisions;

          if (decisions === 'View all departments') {
            viewAlldepartments();
          }

          if (decisions === 'View all roles') {
            viewAllRoles();
          }

          if (decisions === 'View all Employees') {
            viewAllEmployees();
          }

          if (decisions === 'Add department') {
            addDepartment();
          }

          if (decisions === 'Add a role') {
            addRole();
          }

          if (decisions === 'Add an employee') {
            addEmployee();
          }

          if (decisions === 'exit') {
            connection.end();
          }
          
      });
  }
  
// Read list of all departments
app.get('/api/department', (req, res) => {
  const sql = `SELECT id, name, AS section FROM department`;
  
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


// Read all roles
app.get('/api/role', (req, res) => {
  const sql = `SELECT id, title AS position FROM role`;
  
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


// Read list of all employees
app.get('/api/employee', (req, res) => {
  const sql = `SELECT first_name, last_name, role_id AS personel FROM employee`;
  
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


// Create a Department
app.post('/api/department', ({ body }, res) => {
  const sql = `INSERT INTO department (name)
    VALUES (?)`;
  const params = [body.name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});


// Create a Role
app.post('/api/role', ({ body }, res) => {
  const sql = `INSERT INTO role (title, salary, department_id)
    VALUES (?)`;
  const params = [body.title, body.salary, body.department_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Create an employee
app.post('/api/employee', ({ body }, res) => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?)`;
  const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});
