USE empl_db;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("John", "Doe", 1, 10), 
("Jane", "Doe", 2, 11),
("Hope", "Van Dyne", 3, 12),
("Henry", "Pym", 4, 13),
("Scott", "Lang", 5, 14);

INSERT INTO roles (role_id, title, salary, department_id )
VALUES 
(1, "Engineer", 11.5, 21),
(2, "Head Accountant", 21.5, 22),
(3, "Assistant Manager", 31.5, 23),
(4, "Specialist", 41.5, 24),
(5, "Web Developper", 51.5, 25);

INSERT INTO departments (department_id, department)
VALUES 
(21, "R&D"),
(22, "Accounting"),
(23, "Management"),
(24, "HR"),
(25, "IT");