// src/components/AddQuote.tsx
import React, { useState } from 'react';
import axiosApi from "../../axiosApi.ts";
const AddQuote: React.FC = () => {
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newQuote = {
            author,
            category,
            text,
        };
        axiosApi.post('', newQuote)
            .then(() => {
                setAuthor('');
                setCategory('');
                setText('');
            })
            .catch((error) => console.error('Error adding quote:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Автор"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Выберите категорию</option>
                <option value="star-wars">Star Wars</option>
                <option value="famous-people">Famous People</option>
                <option value="saying">Saying</option>
                <option value="humour">Humour</option>
                <option value="motivational">Motivational</option>
            </select>
            <textarea
                placeholder="Текст цитаты"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button type="submit">Добавить цитату</button>
        </form>
    );
};

export default AddQuote;
