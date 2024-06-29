// src/components/QuoteList.tsx
import React, { useEffect, useState } from 'react';
import axiosApi from "../../axiosApi.ts";
interface Quote {
    id: string;
    author: string;
    category: string;
    text: string;
}

interface QuoteListProps {
    category?: string;
}

const QuoteList: React.FC<QuoteListProps> = ({ category }) => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        let query = category ? `?orderBy="category"&equalTo="${category}"` : '';
        axiosApi.get(query)
            .then((response) => {
                const quotesData: Quote[] = [];
                for (let key in response.data) {
                    quotesData.push({ id: key, ...response.data[key] });
                }
                setQuotes(quotesData);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <div>
            {quotes.map((quote) => (
                <div key={quote.id}>
                    <h3>{quote.author}</h3>
                    <p>{quote.text}</p>
                </div>
            ))}
        </div>
    );
};

export default QuoteList;
