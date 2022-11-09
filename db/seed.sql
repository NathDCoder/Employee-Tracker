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
    ("Junior Engineer", 90000, 2),
    ("Finance Director", 175000, 3),
    ("Finance Advisor", 110000, 3),
    ("Logistics Supervisor", 105000, 4),
    ("Logistics Coordinator", 80000, 4);

-- add more roles later for finance and logistics

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES  
    ("Joe","Henderson", 1, NULL),
    ("Thomas", "Smith", 3, 2),
    ("Hannah", "Choi", 1, NULL),
    ("Samuel", "Elkins", 2, 2),
    ("Rachael", "Okonkwo", 1, NULL),
    ("Johnny", "Razer", 2, 2),
    ("Matt", "Hoffman", 4, NULL),
    ("Regina", "Belle", 3, 2);

