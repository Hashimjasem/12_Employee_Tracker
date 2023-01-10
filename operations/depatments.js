//view departments
const {connect} = require("../db/connect");
function viewDepartments(){

}
//create departments
async function createDepartments(name){

    const query = `INSERT INTO \`departments\` (\`name\`) VALUES (?)`;
    const connection = await connect();
    return connection.query(query, [name])

}

module.exports = {
    createDepartments,
    viewDepartments,
}