import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [highlight, setHighlight] = useState(false);
    const [blinking, setBlinking] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Adiciona o fundo preto após 1 segundo
        const timer = setTimeout(() => {
            let blinkCount = 0;
            const blinkInterval = setInterval(() => {
                setBlinking((prev) => !prev);
                blinkCount++;
                if (blinkCount >= 6) {
                    clearInterval(blinkInterval);
                    setHighlight(true);
                }
            }, 500); // Intervalo de 500ms para piscar
        }, 1000); // Atraso de 1 segundo

        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md rounded-lg m-4 border border-gray-200">
            <div className="text-2xl font-bold text-center w-full lg:w-auto">
                Portfólio de <span className={`px-2 py-1 rounded ${highlight ? 'bg-black text-white' : blinking ? 'bg-black text-white' : ''}`}>Jonathan Gomes</span>
            </div>
            <div className="lg:hidden">
                <button onClick={handleMenuClick}>
                    {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>
            <ul className={`lg:flex ${menuOpen ? 'block' : 'hidden'} space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 lg:ml-auto w-full lg:w-auto text-center`}>
                <li><a href="#home" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center"><FaHome className="mr-2" />Home</a></li>
                <li><a href="#sobre" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center"><FaInfoCircle className="mr-2" />Sobre</a></li>
                <li><a href="#projetos" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center"><FaProjectDiagram className="mr-2" />Projetos</a></li>
                <li><a href="#contato" className="hover:bg-black hover:text-white py-2 px-4 rounded flex items-center justify-center"><FaEnvelope className="mr-2" />Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
