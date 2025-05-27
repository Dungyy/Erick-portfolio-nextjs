// src/components/layout/Footer.js
'use client';

import { useState, useEffect } from 'react';
// import PrivacyPolicy from '@/components/ui/PrivacyPolicy';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
    }, []);

    return (
        <footer className="py-6">
            <div className="flex flex-col items-center text-[#9dadbc] text-sm">
                {/* <PrivacyPolicy /> */}
                <p className="text-[#9dadbc] mt-2">
                    Copyright &copy; {currentYear} | Erick Munoz | All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;