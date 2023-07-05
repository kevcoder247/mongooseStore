//=======================================================
//               Require dependencies
//=======================================================
const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const productSeed = require('../models/productSeed');

//=======================================================
//                      Routes
//=======================================================
//SEED DATA
router.get('/seed', async (req, res) => {
  try{
    await Product.deleteMany({});

    await Product.insertMany(productSeed);

    res.redirect('/mongoose');
  }catch (err) {
    console.log(err);
    res.status(500).send('Erro seeding the database');
  }
})

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
});

//UPDATE
router.put('/:id', async (req, res) => {
  try{
    const foundProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.redirect(`/mongoose/${req.params.id}`);
  }catch (err){
    console.log(err);
    res.status(500).send('An error occured in our update route');
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try{
    await Product.findByIdAndRemove(req.params.id);
    res.redirect('/mongoose');
  }catch (err){
    console.log(err);
    res.status(500).send('An error occured in our delete route');
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
});

//EDIT
router.get('/:id/edit', async(req, res) => {
  try{
    const allProducts = await Product.findById(req.params.id);
    res.render('edit.ejs', {
      Products: allProducts
    })
  }catch (err){
    console.log(err);
    res.status(500).send('An error occurred in our show route')
  }
})

//SHOW
router.get('/:id', async (req, res) => { 
  try{
    const foundProduct = await Product.findById(req.params.id);
    res.render('show.ejs', {
      products: foundProduct,
    })
  }catch(err){
    console.log(err);
    res.status(500).send('An error occurred in our show route');
  }
})


module.exports = router;