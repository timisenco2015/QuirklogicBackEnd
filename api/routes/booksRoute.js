const express = require('express');
const router = express.Router();
const booksRepo = require('../repo/BookRepo');

router.get('/v1/api/books', async (req, res) => {
    try {
         const success = await booksRepo.getAllBooks(req, res);
        res.status(200).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});

router.post('/v1/api/book', async (req, res) => {
    try {
        const success = await booksRepo.storeBook(req, res);
        res.status(200).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/v1/api/book/:id', async (req, res) => {
    try {
        const success = await booksRepo.deleteBook(req, res);
       res.status(200).send(success);
    } catch (error) {
       console.log(error);
        res.status(500).send(error);
    }
});

module.exports = router;