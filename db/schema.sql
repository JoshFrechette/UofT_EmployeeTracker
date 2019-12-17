DROP DATABASE IF EXISTS empl_db;

CREATE DATABASE empl_db;

USE empl_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    role_id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INT
);

CREATE TABLE departments (
    department_id INT NOT NULL,
    name VARCHAR(30)
);
