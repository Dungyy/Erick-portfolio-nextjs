// src/components/sections/Skills.js - Professional skills section
const Skills = () => {
    return (
        <section id="skills" className="section bg-white">
            <div className="container mx-auto px-4">
                <div className="section-title">
                    <h2>Technical Expertise</h2>
                    <p className="text-secondary max-w-3xl mx-auto text-center">
                        As a Full Stack Developer specialized in the MERN stack, I offer comprehensive expertise across modern web
                        development technologies with a strong focus on application security and performance optimization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="card p-8">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="fas fa-code text-primary text-2xl"></i>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-6">Front-End Development</h3>

                        <div className="space-y-4">
                            {[
                                { tech: "HTML5/CSS3", icon: "fab fa-html5", level: 90 },
                                { tech: "JavaScript (ES6+)", icon: "fab fa-js", level: 85 },
                                { tech: "React.js", icon: "fab fa-react", level: 80 },
                                { tech: "Responsive Design", icon: "fas fa-mobile-alt", level: 85 },
                                { tech: "UI/UX Principles", icon: "fas fa-palette", level: 75 }
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <div className="flex items-center gap-2">
                                            <i className={`${skill.icon} text-primary`}></i>
                                            <span className="font-medium">{skill.tech}</span>
                                        </div>
                                        <span className="text-secondary">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="card p-8">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="fas fa-server text-primary text-2xl"></i>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-6">Back-End Development</h3>

                        <div className="space-y-4">
                            {[
                                { tech: "Node.js", icon: "fab fa-node-js", level: 85 },
                                { tech: "Express.js", icon: "fas fa-server", level: 80 },
                                { tech: "Python", icon: "fab fa-python", level: 75 },
                                { tech: "RESTful APIs", icon: "fas fa-exchange-alt", level: 85 },
                                { tech: "Shell Scripting", icon: "fas fa-terminal", level: 70 }
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <div className="flex items-center gap-2">
                                            <i className={`${skill.icon} text-primary`}></i>
                                            <span className="font-medium">{skill.tech}</span>
                                        </div>
                                        <span className="text-secondary">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Other */}
                    <div className="card p-8">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <i className="fas fa-tools text-primary text-2xl"></i>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-6">Tools & Infrastructure</h3>

                        <div className="space-y-4">
                            {[
                                { tech: "Git & Version Control", icon: "fab fa-git-alt", level: 85 },
                                { tech: "MongoDB/SQL Databases", icon: "fas fa-database", level: 80 },
                                { tech: "Docker", icon: "fab fa-docker", level: 70 },
                                { tech: "Azure DevOps", icon: "fab fa-microsoft", level: 75 },
                                { tech: "Security Testing", icon: "fas fa-shield-alt", level: 80 }
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <div className="flex items-center gap-2">
                                            <i className={`${skill.icon} text-primary`}></i>
                                            <span className="font-medium">{skill.tech}</span>
                                        </div>
                                        <span className="text-secondary">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;