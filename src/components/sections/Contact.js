'use client';

import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="bg-black text-green-400 font-mono py-16 px-4 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-[26px] md:text-[32px] mb-8 border-b border-green-600 pb-2 uppercase tracking-wider">
                    ~/contact
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* === Left Column === */}
                    <div>
                        <p className="text-green-300 text-sm mb-4"># direct access</p>

                        <div className="mb-6">
                            <p className="text-green-500">[+] email</p>
                            <a
                                href="mailto:erickmunoztech@gmail.com"
                                className="ml-2 text-green-200 hover:text-green-300 text-sm underline"
                            >
                                erickmunoztech@gmail.com
                            </a>
                        </div>

                        <div className="mb-6">
                            <p className="text-green-500">[+] phone</p>
                            <p className="ml-2 text-green-200 text-sm">320.321.4780</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-green-500">[+] location</p>
                            <p className="ml-2 text-green-200 text-sm">Minnesota, United States</p>
                        </div>

                        <div className="mb-6">
                            <p className="text-green-500">[+] social</p>
                            <ul className="ml-2 text-sm space-y-1">
                                <li>
                                    <a
                                        href="https://github.com/Dungyy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-200 hover:text-green-300 underline"
                                    >
                                        github.com/Dungyy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/erick-munoz-2532ab219/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-200 hover:text-green-300 underline"
                                    >
                                        linkedin.com/in/erick-munoz
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* === Right Column === */}
                    <div>
                        <p className="text-green-300 text-sm mb-4"># leave a message</p>
                        <ContactForm />
                    </div>
                </div>

                <div className="mt-12 text-green-400 text-xs">
                    <span className="animate-pulse">▌</span> use <code>curl -d &quot;message&quot; ~/contact</code> to reach me
                </div>
            </div>
        </section>
    );
};

export default Contact;
