'use client';

import { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
        
        const handleScroll = () => {
            // Check if user is near bottom of page
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY + windowHeight;
            
            // Show button when within ~200px of bottom
            setShowScrollButton(documentHeight - scrollPosition < 200);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="border-t-2 border-crt py-6 mt-20">
            <div className="container mx-auto text-center text-[#9dadbc] text-sm font-mono">
                <p className="mb-1">
                    &lt; Built with ❤️ by Erick Munoz /&gt;
                </p>
                <p className="text-xs">
                    Copyright &copy; {currentYear} | All Rights Reserved
                </p>
            </div>
            
            {showScrollButton && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-black border border-crt px-3 py-2 font-mono text-[#9dadbc] hover:text-white transition-colors cursor-pointer"
                    aria-label="Scroll to top"
                >
                    $ cd ..
                </button>
            )}
        </footer>
    );
};

export default Footer;
