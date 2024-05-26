const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "voici les données de get"})
});

router.post("/", (req, res) => {
    res.json({
        Titre: req.body.title,
        Auteur: req.body.author,
        Etat: req.body.etat,
        maxPages: req.body.pagesMax,
        readedPages: req.body.pagesReaded,
        Categories: req.body.categories,
    })
});

module.exports = router;
