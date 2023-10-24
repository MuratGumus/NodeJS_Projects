"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- *
//* export işlemi yapmanın birinci yolu. Doğrudan module.export şeklinde atama yapılır
module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500;
    console.log("errorHandler runned.");
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
        body: req.body, // Hata durumunda servere gönderdiğimiz hatalı veriyi gösterir.
    });
};
app.use(errorHandler);

module.exports = errorHandler 

/* ------------------------------------------------------- */
//* Export yapmanın ikinci yolu. Bu projede farklılık olması için bu yolu kullanacağız

module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500;
    console.log("errorHandler runned.");
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
        body: req.body, // Hata durumunda servere gönderdiğimiz hatalı veriyi gösterir.
    });
};
app.use(errorHandler);

/* ------------------------------------------------------- */
