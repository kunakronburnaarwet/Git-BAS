const express = require('express');
const router  = express.Router();

router.get('/', (req, res)  => {
        res.send('GET Api ')
});
router.get('/', (req, res)  => {
        res.send('GET ONE Api ')
});


router.post('/', (req, res)  => {
        res.send('post Api ')
});
router.put('/:id', (req, res)  => {
        res.send('put    Api ')
});
router.delete('/:id', (req, res)  => {
        res.send('delete   Api ')
});

router.get('/', (req , res) => {
  res.send('<h1>Hello BAS <h1>');
});
 
module.exports = router; 