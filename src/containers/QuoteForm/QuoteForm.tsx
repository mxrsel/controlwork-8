import React, { useState } from 'react';
import axiosApi from "../../axiosApi.ts";
interface Props {
    category: string;
}

const QuoteForm: React.FC<Props> = ({ category }) => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosApi.post('.json', { category, author, text });
            if (response.status === 200) {
                setAuthor('');
                setText('');
                setError(null);
                window.location.href = `/quotes/${category}`;
            } else {
                setError('Failed to save quote');
            }
        } catch (error) {
            console.error('Error saving quote:', error);
            setError('Failed to save quote');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="quote-form">
            <h2>Add New Quote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="text">Quote Text:</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={5}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default QuoteForm;
