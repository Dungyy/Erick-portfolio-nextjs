// src/hooks/useScrollAnimation.js
'use client';

import { useEffect } from 'react';
import Aos from 'aos';
// Hook for handling scroll animations
export const useScrollAnimation = () => {
    useEffect(() => {
        // Initialize AOS (Animation on Scroll) if it exists
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false,
            });
        }

        return () => {
            // Clean up AOS if needed
            if (typeof window !== 'undefined' && window.AOS) {
                window.AOS.refresh();
            }
        };
    }, []);
};
