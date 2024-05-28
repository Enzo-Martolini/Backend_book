const Book = require("../models/bookModel");

//Crée un fonction setPosts qui sera utilisé dans la route Post
module.exports.setPosts = async (req, res) => {
    try {
        console.log(req.body);

        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            state: req.body.state,
            maxPages: Number(req.body.maxPages),
            readedPages: req.body.readedPages ? Number(req.body.readedPages) : undefined,
            categories: Array.isArray(req.body.categories) ? req.body.categories : [req.body.categories]
        });

        await book.save();
        res.status(200).send(book);
    } catch (e) {
        res.status(400).send(e);
    }
};

//Modifie le nombre de pages lues
module.exports.editPages= async (req, res) => {

    const updatePost = await bookModel.findByIdAndUpdate(req.params.id, {readedPages:  parseInt(req.body.readedPages)}, {
        new: true
    });
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

// Fonction pour récupérer tous les livres
module.exports.getAllBooks = async (req, res) => {
    
        const books = await bookModel.find(); // Récupère tous les livres
        res.status(200).json(books);
};

module.exports.getBookById = async (req, res) => {

        const books = await bookModel.findById(req.params.id); // Récupère le livre correspondant à l'ID
        res.status(200).json(books);
};