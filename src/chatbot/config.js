import { createChatBotMessage } from 'react-chatbot-kit';
import CustomInput from '../components/CustomInput'; // Certifique-se de que o caminho está correto

const config = {
    botName: 'MeuBot',
    initialMessages: [createChatBotMessage(`Olá! Como posso ajudá-lo hoje?`)],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    customComponents: {
        header: () => <div style={{ backgroundColor: '#376B7E', padding: '5px', borderRadius: '5px', textAlign: 'center', color: 'white' }}>Conversa com MeuBot</div>,
        userInput: CustomInput,
    },
};

export default config;






