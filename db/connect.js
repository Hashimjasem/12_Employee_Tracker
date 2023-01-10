const mysql = require('mysql2/promise');

async function connect() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'BahaAsraa1305',
        database: 'emloyeee_cms_hw'
    })

    return connection.connect()
}
module.exports = {
    connect
};