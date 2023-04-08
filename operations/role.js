const { connect } = require("../db/connect");

async function getRoles() {
  const query = "SELECT * FROM roles";

  const connection = await connect();

  const [rows, cols] = await connection.query(query);

  return rows;
}

async function addRole(title, salary, departmentId) {
  const query = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
  const connection = await connect();
  return connection.query(query, [title, salary, departmentId]);
}

module.exports = {
  addRole,
  getRoles,
};
