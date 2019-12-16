var inquirer = require("inquirer");
var mysql = require("mysql");
const cTable = require('console.table');

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
            'Update an employees manager'
        ]
    }
];
let start =
async function userStart(){
    console.log("userStart")
        await inquirer  
        .prompt(questions)
        // console.log("questions asked")
        .then(async function(ans) {
            // console.log(ans)
            if (ans.actions === 'View all employees'){
                viewEmpls()
            }
            if (ans.actions === 'View all employees by department'){
                viewEmplsByDept()
            }
            if (ans.actions === 'View all employees by manager'){
                viewEmplsByMgr()
            }
            if (ans.actions ===  'Add an employee'){
                addEmpl()
            }
            if (ans.actions === 'Remove an employee'){
                removeEmpl()
            }
            if (ans.actions === 'Update an employee role'){
                updateRole()
            }
            if (ans.actions === 'Update an employees manager'){
                updateMgr()
            }
        })

    };

function viewEmpls(){
    console.log("view employee")

}

function viewEmplsByDept(){
    
}

function  viewEmplsByMgr(){
    
}

function addEmpl(){
    
}

function removeEmpl(){
    
}

function updateRole(){
    
}

function updateMgr(){
    
}

start()