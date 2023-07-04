//=======================================================
//               Require dependencies
//=======================================================
const express = require('express');
const router = express.Router();






//=======================================================
//                      Routes
//=======================================================
//INDEX
router.get('/', (req, res) => {
  res.send(`<h1>Hello World</h1>`)
})



//CREATE
router.post('/', (req, res) => {
  res.send('received')
})


module.exports = router;