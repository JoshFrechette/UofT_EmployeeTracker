var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "empl_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
  });

const questions = [
    {
        type: "list",
        name: "actions",
        message: "What would you like to do?",  
        choices: [
            'View all employees',
            'View all company roles',
            'View all company departments',
            'Add an employee',
            'Add a company role',
            'Add a company department',
            'Update an employee role'
        ]
    }
];

const addrolequestions = [
{
    type: "input",
    name: "roletitle",
    message: "What is the role title?",  
},
{
    type: "input",
    name: "rolesalary",
    message:  "What is the salary for the role?"
},
{
    type: "input",
    name: "roledeptid",
    message: "What is the role's department ID number?" 
}
];



function userStart() {
    inquirer
            .prompt(questions)
            .then(function (answer) {
                switch (answer.actions) {
                    case "View all employees":
                        viewEmpls();
                        break;

                    case 'View all company roles':
                        viewAllRoles();
                        break;

                    case 'View all company departments':
                        viewAllDepts();
                        break;

                    case "Add an employee":
                        addEmpl();
                        break;

                    case 'Add a company role':
                        addRole();
                        break;

                    case "Add a company department":
                        addDept();
                        break;
                        
                    case "Update an employee role":
                        updateEmplRole();
                        break;
                }
            })
        };

function viewEmpls(){
    var query = "SELECT employees.id , employees.first_name , employees.last_name , roles.title , departments.department ,  roles.salary , employees.manager_id FROM employees JOIN roles ON employees.role_id = roles.role_id"
    query += " JOIN departments ON roles.department_id = departments.department_id"
    connection.query(query, function(err, res) {
        if (err ){
            throw err
        }
        console.log("")
        console.table(res)
        userStart()
    })

};

function viewAllRoles(){
    var query = "SELECT roles.title FROM roles"
    connection.query(query, function(err, res) {
        if (err ){
            throw err
        }
        console.log("")
        console.table(res)
        userStart()
    })
    }
    function viewAllDepts(){
        var query = "SELECT departments.department FROM departments"
        connection.query(query, function(err, res) {
            if (err ){
                throw err
            }
            console.log("")
            console.table(res)
            userStart()
        })
        }

function addEmpl(){
    await inquirer
    .prompt(addrolequestions)
    .then(roleData => {
        var query = connection.query(
            "INSERT INTO roles SET ?",
        {
            "title": roleData.roletitle,
            "salary": roleData.rolesalary,
            "department_id": roleData.roledeptid
        },
        function(err, res) {
            if (err ){
                throw err
            }
            console.log(query.sql);
            userStart()
        })
    })

}
}

function addRole(){
    await inquirer
    .prompt(addrolequestions)
    .then(roleData => {
        var query = connection.query(
            "INSERT INTO roles SET ?",
        {
            "title": roleData.roletitle,
            "salary": roleData.rolesalary,
            "department_id": roleData.roledeptid
        },
        function(err, res) {
            if (err ){
                throw err
            }
            console.log(query.sql);
            userStart()
        })
    })

}

function addDept(){
    await inquirer
    .prompt(addrolequestions)
    .then(roleData => {
        var query = connection.query(
            "INSERT INTO roles SET ?",
        {
            "title": roleData.roletitle,
            "salary": roleData.rolesalary,
            "department_id": roleData.roledeptid
        },
        function(err, res) {
            if (err ){
                throw err
            }
            console.log(query.sql);
            userStart()
        })
    })

}
}

function updateEmplRole(){
    var query = "SELECT departments.department FROM departments"
    connection.query(query, function(err, res) {
        if (err ){
            throw err
        }
        console.log("")
        console.table(res)
        userStart()
    })
    userStart()
}

userStart()