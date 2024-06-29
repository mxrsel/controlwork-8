// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from "./containers/Navbar/Navbar.tsx";
import QuoteList from "./containers/QuoteList/QuoteList.tsx";
import AddQuote from "./components/AddQuote/AddQuote.tsx";
import EditQuote from "./components/EditQuoteForm/EditQuote.tsx";
import './App.css'


const App: React.FC = () => (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<QuoteList />} />
            <Route path="/category/:category" element={<QuoteList />} />
            <Route path="/add" element={<AddQuote />} />
            <Route path="/edit/:id" element={<EditQuote />} />
        </Routes>
    </>
);

export default App;
