
const express = require('express');
const { setPosts, putPost, editPages, editState, getAllBooks, getBookById, getBookByCategory } = require('../controllers/book.controllers');
const router = express.Router();

//Route pour récuperer tous les livres
router.get("/book", getAllBooks); // ==> http://localhost:3000/get/book

//Route pour récuperer un livre selon l'ID
router.get("/book/:id", getBookById); //==> http://localhost:3000/get/book/{mettre l'id ici}

//Route pour récuperer un livre selon l'ID
router.get("/bookFilter/:filtre", getBookByCategory); //==> http://localhost:3000/get/book/{mettre la categorie ici}

module.exports = router;
