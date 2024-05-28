const express = require('express');
const { setPosts, putPost, editPages, editState, getAllBooks, getBookById } = require('../controllers/book.controllers');
const router = express.Router();



//Route pour ajouter un livre dans la BDD
router.post("/", setPosts);

// Route pour modifier le nombre de pages lues
router.put("/:id/pages", editPages);

// Route pour modifier l'état du livre
router.put("/:id/state", editState);

module.exports = router;
