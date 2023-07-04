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
router.get('/', async (req, res) => {
  try{
    Product.find({})
    .then(allProducts => {
      res.render('index.ejs', {
        products: allProducts
      })
    })
  }catch (err){
    console.log(error);
    res.status(500).send('Error in occured in the index Route')
  }
})

//NEW
router.get('/new', (req, res) => {
  try{
    res.render('new.ejs')
  }catch(err){
    console.log(err);
    res.status(500).send('An error occured in the new Route')
  }
})

//CREATE
router.post('/', async(req, res) => {
  try{
    const createdProduct = await Product.create(req.body);
    res.redirect('/mongoose');
  }catch(err){
    console.log(err);
    res.status(500).send('An Error occured in our create route')
  }
  console.log('new product:', req.body)
})


module.exports = router;