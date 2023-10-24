"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const { Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
); 

//! SYNC MUST RUN ONCE!
// sequelize.sync() // SQL tablosu oluşturur. Sadece olmayan tabloyu oluşturmak için kullanılır. Var olan tabloyu güncellemek için değil. Kullandıktan sonra yoruma al.
// sequelize.sync({ force: true }) //* SQL tablosunu silerek mevcut duruma göre yeniden oluşturur. Değişmeyenler aynı kalır. Değişenlerin son hali yazılı olur. Yapılan işlemler terminalde yazıyor. Bilgi için okuyabilirsin. Kullandıktan sonra bu force olan bu kodu yoruma almak kodun yanlışlıkla zarar görmesini engeller.
// sequelize.sync({ alter: true }) //* SQL tablosunun yedeğini alır ve son duruma göre tabloyu oluşturur ve günceller.Yapılan işlemler terminalde yazıyor. Bilgi için okuyabilirsin. Kullandıktan sonra bu alter olan bu kodu yoruma almak kodun yanlışlıkla zarar görmesini engeller.

// Connect:
sequelize.authenticate() 
    .then(() => console.log('* DB Connected *'))
    .catch((err) => console.log('* DB Not Connected *', err))
