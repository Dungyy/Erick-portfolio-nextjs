// src/components/layout/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    FaTimes,
    FaBars
} from "react-icons/fa";
// Make sure the component is properly defined as a function
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (!isOpen) return;
        
        const handleClickOutside = (event) => {
            const header = document.querySelector('header');
            if (header && !header.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light border-b-3 border-dark shadow-retro-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center relative">
                    {/* Logo */}
                    <Link href="/" className="text-dark font-display font-bold text-2xl flex items-center gap-2">
                        <span className={`transition-colors duration-300 ${isScrolled ? 'text-accent' : 'text-light'}`}>
                            Erick Munoz
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-6">
                            {[
                                { id: 'home', label: 'Home' },
                                { id: 'about', label: 'About' },
                                { id: 'skills', label: 'Skills' },
                                { id: 'portfolio', label: 'Portfolio' },
                                { id: 'resume', label: 'Experience' },
                                { id: 'contact', label: 'Contact' }
                            ].map(item => (
                                <li key={item.id}>
                                    <Link
                                        href={`#${item.id}`}
                                        className={`font-mono text-base transition-all duration-300 ${activeSection === item.id
                                            ? isScrolled ? 'text-accent font-semibold' : 'text-accent font-semibold'
                                            : isScrolled ? 'text-dark hover:text-primary' : 'text-light hover:text-accent'
                                            }`}
                                    >
                                        &lt;{item.label}/&gt;
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded"
                        aria-label="Toggle mobile menu"
                        onClick={toggleMenu}
                    >
                        {isOpen
                            ? <FaTimes className={`${isScrolled ? 'text-dark' : 'text-light'}`} />
                            : <FaBars className={`${isScrolled ? 'text-dark' : 'text-light'}`} />
                        }
                    </button>

                    {/* Mobile Menu - Fixed Position */}
                    {isOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-light border-3 border-dark shadow-retro-sm p-4 mt-2">
                            <ul className="space-y-3">
                                {[
                                    { id: 'home', label: 'Home' },
                                    { id: 'about', label: 'About' },
                                    { id: 'skills', label: 'Skills' },
                                    { id: 'portfolio', label: 'Portfolio' },
                                    { id: 'resume', label: 'Experience' },
                                    { id: 'contact', label: 'Contact' }
                                ].map(item => (
                                    <li key={item.id}>
                                        <Link
                                            href={`#${item.id}`}
                                            className={`font-mono text-base block px-3 py-2 border-l-4 ${activeSection === item.id
                                                ? 'border-accent text-accent font-semibold'
                                                : 'border-transparent text-dark hover:text-crt/75 hover:border-crt/75'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            &lt;{item.label}/&gt;
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

// Make sure to export the component correctly
export default Header;