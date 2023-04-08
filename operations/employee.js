const {connect} = require("../db/connect");


async function getEmployee(){
    const query = "SELECT * FROM employee";

    const connection = await connect()

    const [rows, cols] = await connection.query(query);

    return rows;
}


//create employee
async function createEmployee(firstName, lastName, roleId, managerId) {
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const connection = await connect();
    return connection.query(query, [firstName, lastName, roleId, managerId]);
}

async function updateEmployeeRole(employeeId, roleId) {
    const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const connection = await connect();
    return connection.query(query, [roleId, employeeId]);
}


module.exports = {
    createEmployee,
    getEmployee,
    updateEmployeeRole
}