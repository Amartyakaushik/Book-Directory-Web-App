const router = require('express').Router();

router.get('/books', (req, res)  => {
    res.send('Ok');
});

router.get('/books/:id', (req,res) => {

});
router.post('/books', (req,res) => {

});
router.put('/books/:id', (req,res) => {

});
router.delete('/books/:id', (req,res) => {

});

module.exports = router;