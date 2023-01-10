const {default: inquirer} = require('inquirer');
const { viewDepartments, createDepartments } = require('./operations/depatments');


function askQuestion(){
inquirer.prompt([
    {
        message: 'what you like to do?',
        name: 'operation',
        type: 'list',
        choices: [
            'view all departments',
            'create a department',
            'view all roles',
            'view all emloyees',
            'add a role',
            'add a employee',
            'update an employee role',
            'end task',
        ]
    },
    {
        message: 'what is the department name?',
        name: 'department_name',
        type: 'input',
        when: function(ans){
            return ans.operation === 'create a department';
        }
    }
]).then(async(res) => {
    if(res.operation === 'view all departments'){
        await viewDepartments()
    }else if(res.operation === 'create a department'){
        await createDepartments(res.department_name)
    }else if (res.operation === 'end task'){
        console.log('done');
        process.exit(0);
    }
    
})
};


// view all departments

// create a departments

//view all roles, 

//view all employees

//add a role 

//add an employee

//update an employee role