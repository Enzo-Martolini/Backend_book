const express = require('express');
const { setPosts, putPost, editPages, editState } = require('../controllers/book.controllers');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "voici les données de get"})
});

<<<<<<< Updated upstream
router.post("/", setPosts);
router.put("/:id", editPages);
router.put("/:id", editState);
=======

//Route pour ajouter un livre dans la BDD
router.post("/addBook", setPosts);

// Route pour modifier le nombre de pages lues
router.put("/:id/pages", editPages);

// Route pour modifier l'état du livre
router.put("/:id/state", editState);
>>>>>>> Stashed changes

module.exports = router;
