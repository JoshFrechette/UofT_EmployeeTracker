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
            'View all employees by department',
            'View all employees by manager',
            'Add an employee',
            'Remove an employee', 
            'Update an employee role',
            'Update an employees manager',
            '/\n/'
        ]
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

                    case "View all employees by department":
                        viewEmplsByDept();
                        break;

                    case "View all employees by manager":
                        viewEmplsByMgr();
                        break;

                    case "Add an employee":
                        addEmpl();
                        break;

                    case "Remove an employee":
                        removeEmpl();
                        break;

                    case "Update an employee role":
                        updateRole();
                        break;
                        
                    case "Update an employees manager":
                        updateMgr();
                        break;
                }
            })
        };

function viewEmpls(){
    var query = "SELECT * FROM employees";
    connection.query(query, function(err, res) {
        if (err ){
            throw err
        }
        console.table(res)
    })
    userStart()
};

function viewEmplsByDept(){
    var query = "SELECT * FROM employees";
    connection.query(query, function(err, res) {
        if (err ){
            throw err
        }
        console.table(JSON.parse(res))
    })
    userStart()
}

function  viewEmplsByMgr(){
    
    userStart()
}

function addEmpl(){
    
    userStart()
}

function removeEmpl(){
    
    userStart()
}

function updateRole(){
    
    userStart()
}

function updateMgr(){
    
    userStart()
}

userStart()