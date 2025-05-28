const Skills = () => {
    const categories = {
        "# front-end": [
            "[+] HTML5, CSS3",
            "[+] JavaScript (ES6+)",
            "[+] React.js",
            "[+] Responsive Design",
            "[+] Tailwind & UI/UX"
        ],
        "# back-end": [
            "[+] Node.js",
            "[+] Express",
            "[+] REST APIs",
            "[+] MongoDB / SQL",
            "[+] Python / Shell Scripting"
        ],
        "# tools & infra": [
            "[+] Git & GitHub",
            "[+] Docker",
            "[+] Azure DevOps CI/CD",
            "[+] Security Testing"
        ]
    };

    return (
        <section id="skills" className="bg-black text-green-400 font-mono py-16 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[26px] md:text-[32px] mb-8 border-b border-green-600 pb-2 uppercase tracking-wider">
                    ~/skills
                </h2>

                {/* Two column layout for front-end and back-end */}
                <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
                    {/* Front-end column */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <p className="text-green-300 text-sm mb-2">{Object.keys(categories)[0]}</p>
                        <ul className="ml-4 list-none space-y-1">
                            {categories["# front-end"].map((skill, i) => (
                                <li key={i} className="text-green-200">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Back-end column */}
                    <div className="md:w-1/2">
                        <p className="text-green-300 text-sm mb-2">{Object.keys(categories)[1]}</p>
                        <ul className="ml-4 list-none space-y-1">
                            {categories["# back-end"].map((skill, i) => (
                                <li key={i} className="text-green-200">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                {/* Tools & infra section below */}
                <div className="mb-8">
                    <p className="text-green-300 text-sm mb-2">{Object.keys(categories)[2]}</p>
                    <ul className="ml-4 list-none space-y-1">
                        {categories["# tools & infra"].map((skill, i) => (
                            <li key={i} className="text-green-200">{skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 text-green-400 text-xs">
                    <span className="animate-pulse">▌</span> press <code>Ctrl+Z</code> to background
                </div>
            </div>
        </section>
    );
};

export default Skills;
