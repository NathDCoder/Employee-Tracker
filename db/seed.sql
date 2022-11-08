USE employees_db;

INSERT INTO department
(name)
VALUES
    ("sales"),
    ("engineering"),
    ("finance"),
    ("logistics");

INSERT INTO role
(title, salary, department_id)
VALUES  
    ("Sales manager", 60000, 1),
    ("Sales Associate", 45000, 1),
    ("Lead Engineer", 125000, 2),
    ("Junior Engineer", 90000, 2);

-- add more roles later for finance and logistics

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES  
    ("Joe","Henderson", 1, NULL),
    ("Thomas", "Smith", 2, 2),
    ("Hannah", "Choi", 1, NULL),
    ("Samuel", "Elkins", 2, 2);

    
    