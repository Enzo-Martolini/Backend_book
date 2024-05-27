const express = require('express');
const { setPosts, putPost, editPost } = require('../controllers/book.controllers');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "voici les données de get"})
});

router.post("/", setPosts);
router.put("/:id", editPost);

module.exports = router;
