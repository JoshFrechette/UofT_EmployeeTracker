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
(1, "Engineer", 10.5, 21),
(2, "Head Accountant", 10.5, 22),
(3, "Assistant Manager", 10.5, 23),
(4, "Specialist", 10.5, 24),
(5, "Web Developper", 10.5, 25);

INSERT INTO departments (department_id, name)
VALUES 
(21, "R&D"),
(22, "Accounting"),
(23, "Management"),
(24, "HR"),
(25, "IT");