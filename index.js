const express = require('express')
const app = express()
const port = 3000
// npm i mysql2
const mysql = require('mysql2')
const query= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'shopping',
    port:'3308'
})
app.use(express.json())




app.listen(port, () => console.log(`Example app listening on port ${port}!`))