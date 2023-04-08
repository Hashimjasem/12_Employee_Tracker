const inquirer = require("inquirer");
const { getDepartment, createDepartment } = require("./operations/department");
const {getEmployee, createEmployee} = require('./operations/employee')
const {getRole, createRole} = require('./operations/role')


function askQuestion() {
    return inquirer.prompt([
        {
            message: 'what you like to do?',
            name: 'operation',
            type: 'list',
            choices: [
                'view all departments',
                'view all roles',
                'view all emloyees',
                'add a department',
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
            when: function (ans) {
                return ans.operation === 'add a department';
            }
        },
        {
            message: 'what is the role name?',
            name: 'role_name',
            type: 'input',
            when: function (ans) {
                return ans.operation === 'add a role';
            }
        },
        {
            message: 'what is the employees first name?',
            name: 'employee_name',
            type: 'input',
            when: function (ans) {
                return ans.operation === 'add a employee';
            }
        },



    ]).then(async (res) => {

//view//

//department//
        if (res.operation === 'view all departments') {
            const departments = await getDepartment();
            console.table(departments)
//roles//
        } else if (res.operation === 'view all roles') {
            const roles = await getRole();
            console.table(role)
//employee//
        } else if (res.operation === 'view all employees') {
            const employees = await getEmployee();
            console.table(employee)



//add//

//department//
        } else if (res.operation === 'add a department') {
            await createDepartment(res.department_name)
//employee//
        } else if (res.operation === 'add a employee') {
            await createEmployee(res.empployee_name)
//role/
        } else if (res.operation === 'add a role') {
            await createRole(res.role_name)


//update employee role//



//end task//
        } else if (res.operation === 'end task') {
            console.log('done');
            process.exit(0);

        } else {
            throw new Error('error')
        }

        return askQuestion();
    })
};

askQuestion();