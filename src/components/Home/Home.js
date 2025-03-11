import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import fotoJonathan from '../Home/Image/foto-jonathan.png';

const Home = () => {
    const [text, setText] = useState('');
    const message = 'A tecnologia é a arte de transformar o impossível em realidade.';

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText(message.substring(0, index + 1));
            index++;
            if (index === message.length) {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="home" className="p-8 bg-white text-black shadow-md rounded-lg m-4 border border-gray-200">
            <h1 className="text-4xl font-bold mb-4 text-center flex items-center justify-center">
                <FaHome className="mr-2" /> Bem-vindo ao Meu Portfólio
            </h1>
            <p className="text-lg text-center bg-blue-500 text-white py-2 px-4 rounded">
                {text}
            </p>
            <div className="flex justify-center mt-6">
                <img
                    src={fotoJonathan}
                    alt="Foto de Jonathan"
                    className="rounded-full shadow-md w-48 h-48 object-cover"
                />
            </div>
        </div>
    );
};

export default Home;



