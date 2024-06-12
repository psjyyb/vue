const todoSql = require('./todosql.js')
const boardSql = require('./boardSql.js')
const customerSql = require('./customersql.js')
module.exports={
    ...customerSql,
    ...boardSql,
    ...todoSql
}