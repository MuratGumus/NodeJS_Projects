"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* ------------------------------------------------------- */

app.use(express.json())

// Connect to MongoDB with Mongoose: Mongoose ile mongodb kullanarak bağlanma
require('./src/dbConnection')

// HomePage:
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

// Routes:
app.use('/blog', require('./src/routes/blogRoute'))

/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))