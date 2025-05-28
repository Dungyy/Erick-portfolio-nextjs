// src/components/sections/Skills.js - Professional skills section with React Icons
import {
    FaHtml5,
    FaJs,
    FaReact,
    FaMobileAlt,
    FaPalette,
    FaNodeJs,
    FaServer,
    FaPython,
    FaExchangeAlt,
    FaTerminal,
    FaGithub,
    FaDatabase,
    FaDocker,
    FaMicrosoft,
    FaShieldAlt,
    FaCode,
    FaTools
} from "react-icons/fa";

const Skills = () => {
    return (
        <section id="skills" className="section bg-gradient-to-r from-dark/90 to-dark/80 text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="section-title">
                    <h2>Technical Expertise</h2>
                    <p className="max-w-3xl mx-auto text-center mb-6">
                        As a Full Stack Developer specialized in the MERN stack, I offer comprehensive expertise across modern web
                        development technologies with a strong focus on application security and performance optimization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend */}
                    <div className="card p-8">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                                <FaCode className="text-secondary text-2xl" />
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-6">Front-End Development</h3>

                        <div className="space-y-4 ">
                            {[
                                { tech: "HTML5/CSS3", icon: <FaHtml5 className="text-secondary text-xl" /> },
                                { tech: "JavaScript (ES6+)", icon: <FaJs className="text-secondary text-xl" /> },
                                { tech: "React.js", icon: <FaReact className="text-secondary text-xl" /> },
                                { tech: "Responsive Design", icon: <FaMobileAlt className="text-secondary text-xl" /> },
                                { tech: "UI/UX Principles", icon: <FaPalette className="text-secondary text-xl" /> }
                            ].map((skill, index) => (
                                <div key={index} className="flex items-center gap-3 mb-3">
                                    {skill.icon}
                                    <span className="font-medium  text-center">{skill.tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="card p-8">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                                <FaServer className="text-accent text-2xl" />
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-6">Back-End Development</h3>

                        <div className="space-y-4">
                            {[
                                { tech: "Node.js", icon: <FaNodeJs className="text-accent text-xl" /> },
                                { tech: "Express.js", icon: <FaServer className="text-accent text-xl" /> },
                                { tech: "Python", icon: <FaPython className="text-accent text-xl" /> },
                                { tech: "RESTful APIs", icon: <FaExchangeAlt className="text-accent text-xl" /> },
                                { tech: "Shell Scripting", icon: <FaTerminal className="text-accent text-xl" /> }
                            ].map((skill, index) => (
                                <div key={index} className="flex items-center gap-3 mb-3">
                                    {skill.icon}
                                    <span className="font-medium">{skill.tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Other */}
                    <div className="card p-8">
                        <div className="mb-6 flex justify-center">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                                <FaTools className="text-secondary text-2xl" />
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-center mb-6">Tools & Infrastructure</h3>

                        <div className="space-y-4">
                            {[
                                { tech: "Git & Version Control", icon: <FaGithub className="text-secondary text-xl" /> },
                                { tech: "MongoDB/SQL Databases", icon: <FaDatabase className="text-secondary text-xl" /> },
                                { tech: "Docker", icon: <FaDocker className="text-secondary text-xl" /> },
                                { tech: "Azure DevOps", icon: <FaMicrosoft className="text-secondary text-xl" /> },
                                { tech: "Security Testing", icon: <FaShieldAlt className="text-secondary text-xl" /> }
                            ].map((skill, index) => (
                                <div key={index} className="flex items-center gap-3 mb-3">
                                    {skill.icon}
                                    <span className="font-medium">{skill.tech}</span>
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