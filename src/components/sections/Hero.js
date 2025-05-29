/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [bootSequence, setBootSequence] = useState(1);
    const [commandLineVisible, setCommandLineVisible] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [terminalLines, setTerminalLines] = useState([]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [showPrompt, setShowPrompt] = useState(false);
    const terminalRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(null);

    // Terminal boot sequence lines
    const bootLines = [
        'Portfolio Terminal v2.0.25 - Initializing...',
        'Loading developer profile: ERICK_MUNOZ',
        'Scanning skill set... [████████████████████] 100%',
        'Checking security protocols... OK',
        'MERN stack components... LOADED',
        'Establishing secure connections...',
        'Welcome to Erick\'s Development Terminal',
        '═══════════════════════════════════════════',
        ''
    ];

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

    // Available terminal commands
    const commands = {
        help: () => [
            '=== AVAILABLE COMMANDS ===',
            '  about     - Display developer information',
            '  skills    - List technical skills',
            '  projects  - Show portfolio projects',
            '  contact   - Get contact information',
            '  github    - View GitHub profile',
            '  clear     - Clear terminal screen',
            '  whoami    - Display current user info',
            '  date      - Show current date and time',
            '',
            'Type any command to execute'
        ],
        about: () => [
            '╔═════════════╗',
            '║ ERICK MUNOZ ║',
            '╚═════════════╝',
            'Full-Stack Software Developer',
            'Specialization: MERN Stack & Security',
            'Location: Available for remote work',
            'Status: Open to new opportunities',
            '',
            '>>> Passionate about creating clean, secure solutions',
            '    that solve real-world problems with elegant code.'
        ],
        skills: () => [
            '╭─── TECHNICAL SKILLS ───────────────────╮',
            '│                                        │',
            '├─ Frontend Technologies                 │',
            '│  • React.js, Next.js, HTML5, CSS3      │',
            '│  • JavaScript/TypeScript, TailwindCSS  │',
            '│  • Responsive Design, UI/UX            │',
            '│                                        │',
            '├─ Backend Technologies                  │',
            '│  • Node.js, Express.js, Python         │',
            '│  • RESTful APIs, Bash                  │', 
            '│  • MongoDB, PostgreSQL                 │',
            '│                                        │',
            '├─ DevOps & Tools                        │',
            '│  • Git, Docker, CI/CD Pipelines        │',
            '│  • Security Testing, Shell Scripting   │',
            '│  • Azure DevOps, AWS                   │',
            '╰────────────────────────────────────────╯'
        ],
        projects: () => [
            '📂 FEATURED PROJECTS:',
            '',
            '1. [Portfolio Site 2.23] - This interactive terminal portfolio',
            '   Tech: Next.js, React, TailwindCSS, Framer Motion',
            '',
            '2. [Dungyzon] - Full-stack shopping Amazon platform',
            '   Tech: MERN Stack, Webscraper API',
            '',
            '3. [Crypto Tracker Dashboard] - Real-time coin monitoring',
            '   Tech: React, Chart.js, Coin API',
            '',
            'Type "github" to see more projects or visit repository.'
        ],
        contact: () => [
            '📧 CONTACT INFORMATION:',
            '┌─────────────────────────────────────┐',
            '│ Email: erickmunoztech@gmail.com     │',
            '│ LinkedIn: linkedin.com/in/dungy     │',
            '│ GitHub: github.com/dungyy           │',
            '└─────────────────────────────────────┘',
            '',
            '✉️  Ready to discuss your next project!',
            'Use the contact button below or send a direct message.'
        ],
        github: () => [
            'Opening GitHub profile...',
            '',
            '→ github.com/dungyy',
            '',
            'Repositories: 85+',
            'Contributions: 1500+'
        ],
        whoami: () => [
            'erick_munoz@portfolio:~$ whoami',
            '┌──────────────────────────────────────────┐',
            '│ Full-Stack Developer | Security-Focused  │',
            '│ Problem Solver | Open Source Contributor │',
            '└──────────────────────────────────────────┘'
        ],
        date: () => {
            const now = new Date();
            return [
                `Current date: ${now.toLocaleDateString()}`,
                `Current time: ${now.toLocaleTimeString()}`
            ];
        },
        clear: () => 'CLEAR'
    };

    // Check if component is mounted (for SSR compatibility)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Boot sequence effect
    useEffect(() => {
        if (!mounted) return;

        let lineIndex = 0;
        const typeBootSequence = () => {
            if (lineIndex < bootLines.length) {
                setTerminalLines(prev => [...prev, bootLines[lineIndex]]);
                lineIndex++;
                setTimeout(typeBootSequence, 400 + Math.random() * 300);
            } else {
                setTimeout(() => {
                    setBootComplete(true);
                    setShowPrompt(true);
                }, 800);
            }
        };

        const initialDelay = setTimeout(typeBootSequence, 500);
        return () => clearTimeout(initialDelay);
    }, [mounted]);

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [terminalLines]);

    // Simulate auto-commands after boot
    useEffect(() => {
        if (!bootComplete || !showPrompt) return;

        const autoCommands = [];
        let commandIndex = 0;

        const executeAutoCommand = () => {
            if (commandIndex < autoCommands.length) {
                const cmd = autoCommands[commandIndex];
                setTerminalLines(prev => [...prev, `erick@portfolio:~$ ${cmd}`]);

                setTimeout(() => {
                    const result = commands[cmd]();
                    setTerminalLines(prev => [...prev, ...result, '']);
                    commandIndex++;
                    setTimeout(executeAutoCommand, 1500);
                }, 300);
            } else {
                setCommandLineVisible(true);
            }
        };

        const autoStart = setTimeout(executeAutoCommand, 1000);
        return () => clearTimeout(autoStart);
    }, [bootComplete, showPrompt]);

    // Custom typing effect for role
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

    // Handle terminal commands
    const executeCommand = (cmd) => {
        const command = cmd.toLowerCase().trim();

        if (command === 'clear') {
            setTerminalLines([]);
            return;
        }

        if (commands[command]) {
            const result = commands[command]();
            setTerminalLines(prev => [...prev, `erick@portfolio:~$ ${cmd}`, ...result, '']);
        } else {
            setTerminalLines(prev => [...prev,
            `erick@portfolio:~$ ${cmd}`,
            `Command '${cmd}' not found. Type 'help' for available commands.`,
                ''
            ]);
        }
        setCurrentCommand('');
    };

    // Don't render anything until mounted (prevents SSR issues)
    if (!mounted) {
        return (
            <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden bg-terminal">
                <div className="container mx-auto relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-buttons">
                                    <div className="terminal-button red"></div>
                                    <div className="terminal-button yellow"></div>
                                    <div className="terminal-button green"></div>
                                </div>
                                <div className="terminal-title">Loading...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="max-w-7xl mx-auto ">
                    {/* Terminal Window */}
                    <div className="terminal-window bg-terminal border border-gray-600 rounded-lg shadow-2xl">
                        {/* Terminal Header */}
                        <div className="terminal-header bg-gray-800 px-2 sm:px-4 py-2 sm:py-3 rounded-t-lg flex items-center justify-between border-b border-gray-600">
                            <div className="terminal-buttons flex space-x-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="terminal-title text-gray-300 text-xs sm:text-sm font-mono truncate max-w-[180px] sm:max-w-xs">
                                erick@portfolio: ~/dev/portfolio
                            </div>
                            <div className="w-8 sm:w-12"></div>
                        </div>

                        {/* Terminal Content */}
                        <div
                            ref={terminalRef}
                            className="terminal-content bg-terminal p-6 font-mono text-crt text-sm leading-relaxed h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
                        >
                            {/* Boot sequence and command output */}
                            {terminalLines.map((line, index) => (
                                <div key={index} className="mb-1">
                                    {line === '' ? <br /> : (
                                        <span className={line?.startsWith('erick@portfolio:~$') ? 'text-secondary' : 'text-crt'}>
                                            {line}
                                        </span>
                                    )}
                                </div>
                            ))}

                            {/* Current role typing animation */}
                            {commandLineVisible && !hasInteracted && (
                                <div className="mb-4">
                                    <span className="text-secondary">erick@portfolio:~$ </span>
                                    <span className="text-accent">echo</span>
                                    <span className="text-white">"Currently: </span>
                                    <span className="text-crt">
                                        {displayText}
                                        <span className="animate-pulse">|</span>
                                    </span>
                                    <span className="text-white">"</span>
                                </div>
                            )}

                            {/* Interactive prompt */}
                            {showPrompt && (
                                <div className="flex items-center">
                                    <span className="text-secondary mr-2">erick@portfolio:~$</span>
                                    <input
                                        type="text"
                                        value={currentCommand}
                                        onChange={(e) => {
                                            setCurrentCommand(e.target.value);
                                            if (!hasInteracted) setHasInteracted(true);
                                        }}
                                        onFocus={() => {
                                            if (!hasInteracted) setHasInteracted(true);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                executeCommand(currentCommand);
                                            }
                                        }}
                                        className="bg-transparent text-crt outline-none flex-1 font-mono"
                                        placeholder="Type 'help' for available commands..."
                                        autoFocus
                                    />
                                    <span className="text-crt animate-pulse ml-1">█</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Terminal Action Buttons */}
                    {bootComplete && (
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={() => executeCommand('projects')}
                                className="terminal-button-style bg-terminal hover:bg-gray-800 text-green-400 px-6 py-3 font-mono rounded border border-green-500/50 transition-colors"
                            >
                                <span className="text-secondary mr-2">$</span> ./view-portfolio
                            </button>
                            <button
                                onClick={() => executeCommand('contact')}
                                className="terminal-button-style bg-terminal hover:bg-gray-800 text-blue-400 px-6 py-3 font-mono rounded border border-blue-500/50 transition-colors"
                            >
                                <span className="text-secondary mr-2">$</span> ./contact-me
                            </button>
                            <button
                                onClick={() => executeCommand('clear')}
                                className="terminal-button-style bg-terminal hover:bg-gray-800 text-red-400 px-6 py-3 font-mono rounded border border-red-500/50 transition-colors"
                            >
                                <span className="text-secondary mr-2">$</span> clear
                            </button>
                        </div>
                    )}
                    {/* Scroll down indicator */}
                    {bootComplete && (
                        <motion.div
                            className="absolute bottom-100 left-1/2 transform -translate-x-1/2 text-crt mt-11 "
                            animate={{
                                y: [0, -15, 0],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="flex flex-col">
                                <span className="text-sm mb-2 font-mono">SCROLL_DOWN</span>
                                <motion.div
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >
                                    <i className="fas fa-chevron-down"></i>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Terminal styling */}
            <style jsx>{`
                .terminal-window {
                    box-shadow: 0 0 50px rgba(0, 255, 102, 0.3);
                }
                
                .terminal-content::-webkit-scrollbar {
                    width: 8px;
                }
                
                .terminal-content::-webkit-scrollbar-track {
                    background: #1a1a1a;
                }
                
                .terminal-content::-webkit-scrollbar-thumb {
                    background: #4a5568;
                    border-radius: 4px;
                }
                
                .terminal-content::-webkit-scrollbar-thumb:hover {
                    background: #666;
                }

                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 5px currentColor; }
                    50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
                }
                
                .text-crt {
                    animation: glow 2s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    );
};

export default Hero;