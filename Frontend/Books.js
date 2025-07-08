import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Books() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: '', author: '', price: '' });

    const token = localStorage.getItem('access');

    useEffect(() => {
        axios.get('http://localhost:8000/api/books/', {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => setBooks(res.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/books/', form, {
            headers: { Authorization: `Bearer ${token}` }
        });
        window.location.reload();
    };

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map(b => <li key={b.id}>{b.title} by {b.author} - ₹{b.price}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
                <input placeholder="Author" onChange={e => setForm({...form, author: e.target.value})} />
                <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default Books;
