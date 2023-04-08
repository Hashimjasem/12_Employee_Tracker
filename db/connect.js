const mysql = require('mysql2/promise');

async function connect() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employeee_cms_hw'
    });
}
module.exports = {
    connect
};