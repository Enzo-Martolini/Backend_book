document.getElementById('bookForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const state = document.getElementById('state').value;
    const maxPages = parseInt(document.getElementById('maxPages').value);
    const readedPages = parseInt(document.getElementById('readedPages').value) || 0;
    const categories = document.getElementById('categories').value.split(',');

    const book = {
        title,
        author,
        state,
        maxPages,
        readedPages,
        categories
    };

    try {
        const response = await fetch('http://localhost:3000/post/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });

        alert("Livre ajouté");
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'ajout du livre.');
    }
});



const testFetchBooks = async () => {
    try {
        const response = await fetch('http://localhost:3000/get/books');
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const books = await response.json();
        localStorage.setItem("Books", JSON.stringify(books)); //stock les livres dans le localstorage

        // Ajoutez la ligne suivante pour afficher les livres dans la console
        console.log(books);
    } catch (error) {
        console.error("Failed to fetch books:", error);
    }
};

testFetchBooks();

books = JSON.parse(localStorage.getItem("Books")); //récupère les livres depuis le localstorage
console.log(books);

