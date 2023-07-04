//=======================================================
//               Require dependencies
//=======================================================
const express = require('express');
const router = express.Router();
const Product = require('../models/product')






//=======================================================
//                      Routes
//=======================================================
//INDEX
router.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`)
})



//CREATE
router.post('/', (req, res) => {
  res.send(req.body)
})


module.exports = router;