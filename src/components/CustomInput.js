import React from 'react';

const CustomInput = ({ placeholder, value, onChange }) => {
    return (
        <input
            className="react-chatbot-kit-chat-input"
            placeholder={placeholder || 'Escreva sua mensagem aqui'}
            value={value}
            onChange={onChange}
        />
    );
};

export default CustomInput;



