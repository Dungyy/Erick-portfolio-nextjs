// src/components/sections/About.js - Enhanced professional about section
const About = () => {
    return (
        <section id="about" className="section bg-gradient-to-r from-dark/90 to-dark/80 text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p className="max-w-3xl mx-auto text-center">
                        Passionate full-stack developer with a unique journey combining technical expertise,
                        resilience, and a security-first mindset to deliver exceptional digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="space-y-6" data-aos="fade-right">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-secondary">
                                Full-Stack Software Developer
                            </h3>
                            <div className="w-20 h-1 bg-secondary rounded"></div>
                        </div>

                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                I&apos;m <span className="text-white font-semibold">Erick Munoz</span>, a dedicated full-stack developer
                                focused on creating elegant, scalable solutions that deliver business value.
                            </p>

                            <p>
                                My path to tech was shaped by overcoming significant life challenges, including cancer.
                                These experiences instilled in me resilience, adaptability, and a drive to build
                                meaningful solutions.
                            </p>

                            <p>
                                With expertise in the <span className="text-secondary font-medium">MERN stack</span>,
                                I develop responsive web applications where performance meets security.
                                My cybersecurity background ensures every solution is functional, user-friendly, and secure.
                            </p>

                            <p>
                                I&apos;m committed to continuous professional growth and staying current with emerging technologies.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-6">
                            <p className="text-white font-medium">
                                Let&apos;s collaborate to create impactful digital solutions that make a difference.
                            </p>
                        </div>
                    </div>

                    {/* Statistics/Highlights Section */}
                    <div className="space-y-6" data-aos="fade-left">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="card p-6 text-center">
                                <div className="text-3xl font-bold text-secondary mb-2">MERN</div>
                                <p className="text-sm text-gray-300">Stack Specialist</p>
                            </div>
                            <div className="card p-6 text-center">
                                <div className="text-3xl font-bold text-accent mb-2">Security</div>
                                <p className="text-sm text-gray-300">First Approach</p>
                            </div>
                            <div className="card p-6 text-center">
                                <div className="text-3xl font-bold text-secondary mb-2">Full-Stack</div>
                                <p className="text-sm text-gray-300">Development</p>
                            </div>
                            <div className="card p-6 text-center">
                                <div className="text-3xl font-bold text-accent mb-2">Continuous</div>
                                <p className="text-sm text-gray-300">Learning</p>
                            </div>
                        </div>

                        {/* Key Strengths */}
                        <div className="card p-6">
                            <h4 className="text-lg font-semibold mb-4 text-center">Core Strengths</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span className="text-sm">Problem-solving with resilient mindset</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">Security-conscious development practices</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span className="text-sm">Clean, maintainable code architecture</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">User-focused design thinking</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span className="text-sm">Agile development methodologies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;