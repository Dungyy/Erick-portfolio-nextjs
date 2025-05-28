const Resume = () => {
    return (
        <section id="resume" className="bg-black text-green-400 font-mono py-16 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[26px] md:text-[32px] mb-8 border-b border-green-600 pb-2 uppercase tracking-wider">
                    ~/resume
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* === Left Column === */}
                    <div>
                        <p className="text-green-300 text-sm mb-3 p-1"># education & certs</p>

                        <div className="mb-6">
                            <p className="text-green-500 p-1">[+] Ethical Hacking Bootcamp</p>
                            <p className="text-green-300 ml-2 text-sm p-1">zSecurity</p>
                            <p className="ml-2 text-sm text-green-200 p-1">
                                Learned to exploit, pentest, and defend systems. Strong command of Kali, Metasploit, and Wireshark.
                            </p>
                        </div>

                        <div className="mb-6">
                            <p
                                className="text-green-500 hover:text-green-300 cursor-pointer p-1"
                                onClick={() => window.open('https://udemy-certificate.s3.amazonaws.com/image/UC-55d2d303-d44d-4ffd-b4ce-b4805bf0a3b8.jpg?v=1652076006000')}
                            >
                                [+] 2022 Web Dev Bootcamp <span className="text-green-200 text-xs">(udemy)</span>
                            </p>
                            <p className="ml-2 text-sm text-green-200 p-1">
                                Full-stack web dev. Projects with Node, Mongo, React. Certificate available.
                            </p>
                        </div>
                    </div>

                    {/* === Right Column === */}
                    <div>
                        <p className="text-green-300 text-sm mb-3"># experience</p>

                        <div className="mb-6">
                            <p
                                className="text-green-500 hover:text-green-300 cursor-pointer"
                                onClick={() => window.open('https://nteglobal.com/')}
                            >
                                [+] Nova-Tech Engineering
                            </p>
                            <p className="text-green-300 ml-2 text-sm p-1">Software Developer</p>
                            <p className="text-green-200 ml-2 text-xs italic p-1">current</p>
                            <p className="ml-2 text-sm text-green-200 p-1">
                                Developing and maintaining web applications, implementing coding best practices, and collaborating with cross-functional teams to deliver high-quality software solutions
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-green-500 p-1">[+] Independent Developer</p>
                            <p className="text-green-300 ml-2 text-sm p-1">Freelance / Consultant</p>
                            <p className="ml-2 text-sm text-green-200 p-1">
                                Built secure, fast websites for clients. Focused on performance, SEO, and mobile UX.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-green-400 text-xs">
                    <span className="animate-pulse">▌</span> press <code>Ctrl+C</code> to exit
                </div>
            </div>
        </section>
    );
};

export default Resume;
