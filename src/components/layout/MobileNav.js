// src/components/layout/MobileNav.js
'use client';

import { useState, useEffect } from 'react';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('mobile-nav-active');
    };

    const closeNav = () => {
        if (isOpen) {
            setIsOpen(false);
            document.body.classList.remove('mobile-nav-active');
        }
    };

    useEffect(() => {
        const handleNavLinkClick = (e) => {
            if (e.target.classList.contains('nav-link') || e.target.closest('.nav-link')) {
                closeNav();
            }
        };

        document.addEventListener('click', handleNavLinkClick);
        return () => {
            document.removeEventListener('click', handleNavLinkClick);
        };
    }, [isOpen]);

    return (
        <i
            className={`bi ${isOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle fixed right-[15px] top-[15px] z-[9998] text-2xl transition-all duration-400 outline-none bg-primary text-black w-10 h-10 flex items-center justify-center rounded-[50px] cursor-pointer md:hidden`}
            onClick={toggleNav}
        ></i>
    );
};

export default MobileNav;