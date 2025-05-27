'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import RetroButton from '@/components/ui/RetroButton';

const Hero = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [bootSequence, setBootSequence] = useState(1);
    const [commandLineVisible, setCommandLineVisible] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Typed strings for the developer roles 
    const typedStrings = useMemo(() => [
        'Software Developer',
        'Full-Stack Developer',
        'Freelancer & Consultant',
        'MERN Stack Developer',
        'Security Specialist',
        'Web Developer',
        'Open Source Contributor',
        'Tech Enthusiast',
    ], []);

    // Check if component is mounted (for SSR compatibility)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Custom typing effect
    useEffect(() => {
        if (!commandLineVisible || !mounted) return;

        let timeout;
        const currentString = typedStrings[currentRoleIndex];

        if (isTyping) {
            if (displayText.length < currentString.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentString.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 1500);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                setCurrentRoleIndex((prev) => (prev + 1) % typedStrings.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isTyping, currentRoleIndex, commandLineVisible, mounted, typedStrings]);

    // Boot sequence effect
    useEffect(() => {
        if (!mounted) return;

        // Start boot sequence
        const bootTimer1 = setTimeout(() => {
            setBootSequence(2);
        }, 1800);

        const bootTimer2 = setTimeout(() => {
            setBootSequence(3);
        }, 2600);

        const bootTimer3 = setTimeout(() => {
            setBootSequence(4);
        }, 4400);

        const bootTimer4 = setTimeout(() => {
            setBootComplete(true);
        }, 6200);

        const commandLineTimer = setTimeout(() => {
            setCommandLineVisible(true);
        }, 7850);

        return () => {
            clearTimeout(bootTimer1);
            clearTimeout(bootTimer2);
            clearTimeout(bootTimer3);
            clearTimeout(bootTimer4);
            clearTimeout(commandLineTimer);
        };
    }, [mounted]);

    // Don't render anything until mounted (prevents SSR issues)
    if (!mounted) {
        return (
            <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="h-96 flex items-center justify-center">
                            <div className="text-light font-mono">Loading...</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden">
            {/* Hero Background with Retro Grid */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('/public/img/pexels-roberto-nickson-2885320.jpg')",
                    backgroundBlendMode: "overlay"
                }}
            >
                {/* Retro gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/80"></div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 bg-repeat opacity-10"
                    style={{
                        backgroundImage: "url('/img/grid-pattern.svg')",
                        backgroundSize: "50px 50px"
                    }}
                ></div>

                {/* Scanlines overlay */}
                <div className="absolute inset-0 scanlines pointer-events-none"></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Boot sequence terminal - visible during "boot" */}
                    {!bootComplete && (
                        <div className="retro-terminal mb-8 font-mono text-crt">
                            <p>SYSTEM BOOT SEQUENCE INITIATED...</p>
                            {bootSequence >= 2 && (
                                <p className="mt-2">LOADING PORTFOLIO OS v2.0.25...</p>
                            )}
                            {bootSequence >= 3 && (
                                <p className="mt-2">INITIALIZING DEVELOPER PROFILE: ERICK_MUNOZ...</p>
                            )}
                            {bootSequence >= 4 && (
                                <p className="mt-2">SYSTEM READY. PRESS ANY KEY TO CONTINUE...</p>
                            )}
                        </div>
                    )}

                    {/* Main content - visible after "boot" */}
                    {bootComplete && (
                        <div className="space-y-8 p-6 bg-dark/80">
                            <div
                                className="inline-block bg-accent p-2 font-mono text-white text-sm animate-fade-in hover:border-2 hover:border-black hover:rounded-lg  duration-200"
                                style={{ animationDelay: "200ms" }}
                            >
                                <span className="animate-blink">█</span> PORTFOLIO OS v2.0.25
                            </div>

                            <h1
                                className="font-display text-5xl md:text-7xl text-light mb-6 animate-fade-in"
                                style={{ animationDelay: "400ms" }}
                            >
                                ERICK<span className="text-accent">_</span>MUNOZ
                            </h1>

                            {commandLineVisible && (
                                <div
                                    className="retro-terminal p-4 mb-6 animate-fade-in hover:border hover:border-black hover:rounded-md duration-200"
                                    style={{ animationDelay: "600ms" }}
                                >
                                    <div className="flex items-center">
                                        <span className="text-accent mr-2">$</span>
                                        <span className="mr-2">role:</span>
                                        <span className="text-crt">
                                            {displayText}
                                            <span className="animate-blink ml-1">|</span>
                                        </span>
                                    </div>
                                </div>
                            )}

                            <p
                                className="text-lg text-light mb-10 max-w-2xl font-mono animate-fade-in"
                                style={{ animationDelay: "800ms" }}
                            >
                                &lt;!-- Crafting clean, secure, and effective software solutions that solve real-world problems.
                                Specializing in web development with a focus on the MERN stack and application security. --/&gt;
                            </p>

                            <div
                                className="flex flex-wrap gap-4 animate-fade-in "
                                style={{ animationDelay: "1000ms" }}
                            >
                                <RetroButton href="#portfolio" className="hover:border-2 hover:border-black hover:rounded-lg p-1" primary>
                                    <i className="fas fa-folder-open mr-2 "></i> VIEW_WORK.exe
                                </RetroButton>
                                <RetroButton href="#contact" className="hover:border-2 hover:border-black hover:rounded-lg p-1" secondary>
                                    <i className="fas fa-paper-plane mr-2"></i> CONTACT.exe
                                </RetroButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll down indicator */}
            {bootComplete && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-light text-center animate-bounce">
                    <div className="flex flex-col items-center">
                        <span className="text-sm mb-2 font-mono">SCROLL_DOWN</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            )}

            {/* Decorative retro corners */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t-3 border-l-3 border-accent"></div>
            <div className="absolute top-8 right-8 w-8 h-8 border-t-3 border-r-3 border-accent"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-3 border-l-3 border-accent"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-3 border-r-3 border-accent"></div>
        </section>
    );
};

export default Hero;