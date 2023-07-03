//=====================================
//         Dependencies
//=====================================
const express = require('express');
const app = express();
require('dotenv').config();
const productController = require('./controllers/products')


//===========================================================
//        Controllers- Technically just middleware
//===========================================================
app.use('/mongoose', productController);




//=====================================
//            Listener
//=====================================
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));