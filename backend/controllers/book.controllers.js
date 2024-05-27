const bookModel = require("../models/bookModel");

//Crée un fonction setPosts qui sera utilisé dans la route Post
module.exports.setPosts = async (req, res) => { 
    const book = await bookModel.create({
        title: req.body.title,
        author: req.body.author,
        state: req.body.etat,
        maxPages: req.body.pagesMax,
        readedPages: req.body.pagesReaded,
        Categories: req.body.categories
    })
    res.json({message : req.body.title + " enregistré"})
}

//Modifie le nombre de pages lues
module.exports.editPages= async (req, res) => {

    const updatePost = await bookModel.findByIdAndUpdate(req.params.id, {readedPages:  parseInt(req.body.readedPages)}, {
        new: true
    });
    console.log(req.params.id, {readedPages:  parseInt(req.body.readedPages)});
    res.status(200).json(updatePost);
    console.log()
}

//Modifie l'état du livre
module.exports.editState= async (req, res) => {

    const updatePost = await bookModel.findByIdAndUpdate(req.params.id, {state: req.body.state}, {
        new: true
    });

    res.status(200).json(updatePost);
}