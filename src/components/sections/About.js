/* eslint-disable react/no-unescaped-entities */

const About = () => {
    return (
        <section id="about" className="bg-black text-green-400 font-mono py-16 px-4 min-h-screen">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-[26px] md:text-[32px] mb-8 border-b border-green-600 pb-2 uppercase tracking-wider">
                    ~/whoami
                </h2>
                <div className="space-y-4">
                    <p className="text-green-200 leading-relaxed">
                        Hey, I'm a <span className="text-green-400">full stack developer</span> who loves hacking on ideas and building secure, high-performance web apps.
                    </p>
                    <p className="text-green-200 leading-relaxed">
                        I specialize in the <span className="text-green-400">MERN stack</span> — MongoDB, Express, React, and Node.js — but I'm also comfortable working with tools like Bash, Python, and Docker containers.
                    </p>
                    <p className="text-green-200 leading-relaxed">
                        My focus is <span className="text-green-400">clean, readable code</span>, robust security practices, and delivering solutions that just work.
                    </p>
                    <p className="text-green-200 leading-relaxed">
                        Whether it's building dashboards, APIs, or automating workflows — I'm always shipping code.
                    </p>
                    <p className="text-green-200 leading-relaxed">
                        When I'm not coding, you can find me exploring new tech, hiking trails wit the fam, or enjoying a good cup of coffee.
                    </p>
                </div>
                <div className="mt-12 text-green-400 text-xs">
                    <span className="animate-pulse">▌</span> run <code>whoami</code> for more
                </div>
            </div>
        </section>
    );
};

export default About;
