import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) { // 10% da altura da janela
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-black transition duration-300"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={24} />
            </button>
        )
    );
};

export default ScrollToTopButton;