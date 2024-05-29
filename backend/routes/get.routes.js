
const express = require('express');
const { setPosts, putPost, editPages, editState, getAllBooks, getBookById } = require('../controllers/book.controllers');
const router = express.Router();

//Route pour récuperer tous les livres
router.get("/book", getAllBooks);

//Route pour récuperer un livre selon l'ID
router.get("/book/:id", getBookById);

module.exports = router;
