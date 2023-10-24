"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------- */
// Accept json data & convert to object: objeye çevirir
app.use(express.json())


// Database connection. //Database'e bağladık
app.use('./App/dbConnection.js')

// errorHandler (Catch Errors) // Hata yakalamayı aktifleştirdik.
app.use('./App/errorHandler.js')
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));