//Code refactor

const sql = require('mssql');
const connectionString = 'some-cnn-string';
const query1 = 'some-query-1';
const query2 = 'some-query-2';
const query3 = 'some-query-3';

function getElementById() {
    sql.connect(connectionString).then(() => {
        return sql.query(query1)
    }).then(result1 => {
        console.log(result1)
        return sql.query(query2, {...result1})
    }).then(result2 => {
        console.log(result2)
        return sql.query(query3, {...result2})
    }).then(result3 => {
        console.log(result3)
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    getElementById,
};