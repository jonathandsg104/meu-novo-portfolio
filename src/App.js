import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import ChatbotComponent from './components/Chatbot'; // Certifique-se de que o caminho está correto

import './App.css'; // Supondo que você tenha um arquivo de estilo

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Sobre />
            <Projetos />
            <Contato />
            <ScrollToTopButton />   
            <ChatbotComponent />
        </div>
    );
};

export default App;









