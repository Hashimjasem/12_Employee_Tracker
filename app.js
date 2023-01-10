const {default: inquirer} = require('inquirer');


function askQuestion(){
inquirer.prompt([
    {
        message: 'what you like to do?',
        name: 'operation',
        type: 'list',
        choices: [
            'view all departments',
            'create a department',
        ]
    }
]).then((res) => {
    
})
};


// view all departments

// create a departments

//view all roles, 

//view all employees

//add a role 

//add an employee

//update an employee role