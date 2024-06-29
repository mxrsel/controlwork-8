/// src/components/EditQuote.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosApi from "../../axiosApi.ts";
const EditQuote: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        axiosApi.get(`/${id}.json`)
            .then((response) => {
                const quote = response.data;
                setAuthor(quote.author);
                setCategory(quote.category);
                setText(quote.text);
            })
            .catch((error) => console.error('Error fetching quote:', error));
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedQuote = {
            author,
            category,
            text,
        };
        axiosApi.put(`/${id}.json`, updatedQuote)
            .then(() => {
                navigate('/');
            })
            .catch((error) => console.error('Error updating quote:', error));
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
            <button type="submit">Сохранить изменения</button>
        </form>
    );
};

export default EditQuote;
