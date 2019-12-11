DROP DATABASE IF EXISTS empl_db;

CREATE DATABASE empl_db;

USE empl_db;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
)