const router = require('express').Router();

router.get('/books', (req, res)  => {
    res.send('Ok');
});



router.get('/books/:id', function (req, res) {
    const { id } = req.params;

    const book = booksDirectory.find(b => b.isbn === id);
    if (!book) return res.status(404).send('Book does not exist');

    res.send(book);
});



router.post('/books', (req,res) => {

});
router.put('/books/:id', (req,res) => {

});
router.delete('/books/:id', (req,res) => {

});

module.exports = router;