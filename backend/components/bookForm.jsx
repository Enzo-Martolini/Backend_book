// src/components/BookForm.jsx
import React, { useState } from 'react';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [state, setState] = useState('');
    const [maxPages, setMaxPages] = useState('');
    const [readedPages, setReadedPages] = useState('');
    const [categories, setCategories] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const book = {
            title,
            author,
            state,
            maxPages: parseInt(maxPages),
            readedPages: parseInt(readedPages),
            categories: categories.split(',')
        };

        try {
            const response = await fetch('http://localhost:5000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de l\'ajout du livre.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Titre:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <br />
            <label>
                Auteur:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </label>
            <br />
            <label>
                État:
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
            </label>
            <br />
            <label>
                Pages totales:
                <input type="number" value={maxPages} onChange={(e) => setMaxPages(e.target.value)} required />
            </label>
            <br />
            <label>
                Pages lues:
                <input type="number" value={readedPages} onChange={(e) => setReadedPages(e.target.value)} />
            </label>
            <br />
            <label>
                Catégories:
                <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} />
            </label>
            <br />
            <button type="submit">Ajouter le livre</button>
        </form>
    );
};

export default BookForm;
