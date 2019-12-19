USE empl_db;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Doe", 41, 10), 
("Jane", "Doe", 42, 11),
("Hope", "Van Dyne", 43, 12),
("Henry", "Pym", 44, 13),
("Scott", "Lang", 45, 14);

INSERT INTO roles (role_id, title, salary, department_id )
VALUES 
(41, "Engineer", 11.5, 21),
(42, "Head Accountant", 21.5, 22),
(43, "Assistant Manager", 31.5, 23),
(44, "Specialist", 41.5, 24),
(45, "Web Developper", 51.5, 25);

INSERT INTO departments (department_id, department)
VALUES 
(21, "R&D"),
(22, "Accounting"),
(23, "Management"),
(24, "HR"),
(25, "IT");