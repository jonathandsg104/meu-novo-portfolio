import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config';
import ActionProvider from '../chatbot/ActionProvider';
import MessageParser from '../chatbot/MessageParser';
import ChatbotIcon from '../assets/chatbot-icon.png'; // Caminho correto para o ícone
import './Chatbot.css'; // Importação correta do arquivo CSS

const ChatbotComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    useEffect(() => {
        if (isFirstVisit) {
            setIsOpen(true);
            setIsFirstVisit(false);
        }

        // Modificar o placeholder do campo de entrada
        const inputField = document.querySelector('.react-chatbot-kit-chat-input');
        if (inputField) {
            inputField.setAttribute('placeholder', 'Escreva sua mensagem aqui');
        }
    }, [isFirstVisit]);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);

        // Modificar o placeholder do campo de entrada ao abrir o chatbot
        const inputField = document.querySelector('.react-chatbot-kit-chat-input');
        if (inputField) {
            inputField.setAttribute('placeholder', 'Escreva sua mensagem aqui');
        }
    };

    return (
        <>
            <div className="chatbot-button" onClick={toggleChatbot}>
                <img src={ChatbotIcon} alt="Chatbot" />
            </div>
            <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
            </div>
        </>
    );
};

export default ChatbotComponent;





















