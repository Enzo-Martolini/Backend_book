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
        const response = await fetch('http://localhost:3000/post', {
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
