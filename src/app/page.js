// src/app/page.js - Updated for ES Modules
'use client';

import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Update imports with .js extension for ES modules compatibility
import Header from '@/components/layout/Header.js';
import Hero from '@/components/sections/Hero.js';
import About from '@/components/sections/About.js';
import Skills from '@/components/sections/Skills.js';
import Portfolio from '@/components/sections/Portfolio.js';
import Resume from '@/components/sections/Resume.js';
import Contact from '@/components/sections/Contact.js';
import Footer from '@/components/layout/Footer.js';
import BackToTop from '@/components/ui/BackToTop.js';

export default function Home() {
  // Reference for the cursor sound effect
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });

    // Handle hash links for smooth scrolling
    if (window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Add custom class to body for retro effects
    document.body.classList.add('retro-theme');

    // Optional: Add cursor click sound effect
    const handleClick = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.log('Audio playback prevented:', e));
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.body.classList.remove('retro-theme');
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Scroll indicator animation
  const scrollIndicator = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '30px',
    height: '50px',
    border: '3px solid #336699',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px',
    zIndex: 50,
  };

  const scrollDot = {
    width: '8px',
    height: '8px',
    backgroundColor: '#336699',
    borderRadius: '50%',
    animation: 'scrollAnimation 1.5s infinite',
  };

  return (
    <div className="crt-container relative">
      {/* Header with navigation */}
      <Header />

      {/* Main content */}
      <main id="main" className="relative z-10 overflow-hidden">
        {/* Hero section with retro terminal effect */}
        <Hero />

        {/* About section with retro card design */}
        <About />

        {/* Skills section with retro progress bars */}
        <Skills />

        {/* Portfolio section with retro project cards */}
        <Portfolio />

        {/* Resume section with retro timeline */}
        <Resume />

        {/* Contact section with retro form */}
        <Contact />

        {/* Footer with retro styling */}
        <Footer />
      </main>

      {/* Back to top button */}
      <BackToTop />

      {/* CRT Scanline Effect */}
      <div className="scanline"></div>

      {/* Retro corner decorations */}
      <div className="fixed top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-accent"></div>
      <div className="fixed top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-accent"></div>
      <div className="fixed bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-accent"></div>
      <div className="fixed bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-accent"></div>

      {/* Hidden audio for click sound effect */}
      {/* <audio ref={audioRef} src="/sounds/click.mp3" preload="auto" /> */}

      {/* Easter egg: Konami code listener (will add special effect when activated) */}
      <div id="konami-easter-egg" className="hidden">
        {/* This div will contain a special effect when the Konami code is entered */}
        {/* Up, Up, Down, Down, Left, Right, Left, Right, B, A */}
      </div>
    </div>
  );
}