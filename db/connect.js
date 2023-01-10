const mysql = require('mysql2');
const { async } = require('rxjs');

async function connect (){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'BahaAsraa1305',
        database:'emloyee_cms_hw'
    })

return connection.connect()
}
module.exports = {
    connect
};