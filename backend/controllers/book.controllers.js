const bookModel = require("../models/bookModel");

//Crée un fonction setPosts qui sera utilisé dans la route Post
module.exports.setPosts = async (req, res) => { 
    try {
        console.log
        const book = await bookModel({
            title: req.body.title,
            author: req.body.author,
            state: req.body.etat,
            maxPages: Number(req.body.pagesMax),
            readedPages: Number(req.body.pagesReaded),
            categories: req.body.categories
        })
        await book.save()
        res.status(200).send(book)
    }catch(e) {
res.status(400).send(e)
    }
} 

//Modifie le nombre de pages lues
module.exports.editPages = async (req, res) => {
    try {
        const updatePost = await bookModel.findByIdAndUpdate(req.params.id, { readedPages: parseInt(req.query.readedPages) }, { new: true });
        if (!updatePost) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatePost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

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

module.exports.getBookByCategory = async (req, res) => {
    const { filtre } = req.params;
    const books = await bookModel.find({categories : filtre}); //Récupère les livres correspondant aux filtres
    res.json(books);
};