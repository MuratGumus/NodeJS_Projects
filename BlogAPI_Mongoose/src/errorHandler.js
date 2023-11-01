"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Catch Errors:
//? statusCode değil errorStatusCode yazıyoruz. Çünkü statusCode hali hazırda res'in içerisinde mevcut. res'in içerisindeki statusCode'dan muhakkak bir veri döndüğü için hiçbir zaman boş dönmüyor ve altta yazdığımız "boş" ise 500 yazdır kodu manasız oluyor. çakışma olmaması için farklı bir isim kullanıyoruz.
//* error handler olması için 4 parametre olması lazım. middleware olacak.
module.exports = (err, req, res, next) => {
    const errorStatusCode = res?.errorStatusCode ?? 500  // Gelirse statusCode'u, gelmezse 500'ü yazdıracak.
// status(errorStatusCode), status kodu getirirken, send() ise statusCode'u ekrana bastıracak
    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body  // Burayı göndermek zorunda değiliz ama hata alırsak gönderdiğim görüp hatayı daha rahat görmek için body'yi de ekrana basıyoruz.
    })
}