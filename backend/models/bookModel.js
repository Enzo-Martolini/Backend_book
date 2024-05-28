const mongoose = require ("mongoose");


const bookSchema = new mongoose.Schema( //Je crée le shema bookSchema
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        maxPages: {
            type: Number,
            required: true,
        },
        readedPages: {
            type: Number,
        },
        categories: {
            type: [String]
        },
    },
    {
        timestamps: true
    }
)

// Exporte le modèle de données pour le livre (book) en utilisant le schéma bookSchema
const Book = mongoose.model('Book', bookSchema);
module.exports = Book