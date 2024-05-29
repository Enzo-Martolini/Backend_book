const bookModel = require("../models/bookModel");

//Crée un fonction setPosts qui sera utilisé dans la route Post
module.exports.setPosts = async (req, res) => { 
<<<<<<< Updated upstream
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
=======
    try {
        console.log
        const book = await Book({
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
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
}
=======
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
    const books = await bookModel.find({categories : req.params});
    res.json(books);
};
>>>>>>> Stashed changes
