// src/components/sections/Contact.js
'use client';

import ContactForm from '@/components/ui/ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="contact py-[60px] pb-[130px] text-[20px]">
            <div className="testimonials-slider">
                <div className="section-title contact1 text-[rgb(135,150,156)] ml-[10px]">
                    <h2 className="text-[32px] font-bold mb-[20px] pb-[20px] relative text-[#1f5297]">Contact Information</h2>
                    <p>
                        I welcome the opportunity to discuss your project needs or potential collaboration opportunities.
                        Please feel free to reach out!
                    </p>
                </div>

                <div className="flex flex-wrap contact1" data-aos="fade-up">
                    <div className="lg:w-5/12 flex items-stretch">
                        <div className="info p-[30px] bg-black w-full shadow-lg">
                            <br />
                            <div className="email">
                                <i className="bi bi-envelope text-[30px] text-[#1f5297] float-left w-[44px] h-[44px] flex justify-center items-center rounded-[50px] transition-all duration-300 hover:bg-[#1f5297] hover:text-black"></i>
                                <h4 className="pl-[60px] text-[1.4rem] font-semibold mb-[5px] text-[#9dadbc]">Email:</h4>
                                <a href="mailto:erickmunoztech@gmail.com" className="text-[#394855] ml-[15px] text-[1.2rem] hover:text-[#9dadbc]">
                                    erickmunoztech@gmail.com
                                </a>
                            </div>
                            <br />
                            <div className="phone">
                                <i className="bi bi-phone text-[30px] text-[#1f5297] float-left w-[44px] h-[44px] flex justify-center items-center rounded-[50px] transition-all duration-300 hover:bg-[#1f5297] hover:text-black"></i>
                                <h4 className="pl-[60px] text-[1.4rem] font-semibold mb-[5px] text-[#9dadbc]">Phone:</h4>
                                <p className="pl-[60px] mb-[20px] text-[1.2rem] text-[#394855] hover:text-[#0e2442]">320.321.4780</p>
                            </div>
                            <div className="address">
                                <i className="bi bi-geo-alt text-[30px] text-[#1f5297] float-left w-[44px] h-[44px] flex justify-center items-center rounded-[50px] transition-all duration-300 hover:bg-[#1f5297] hover:text-black"></i>
                                <h4 className="pl-[60px] text-[1.4rem] font-semibold mb-[5px] text-[#9dadbc]">Location:</h4>
                                <p className="pl-[60px] mb-[20px] text-[1.2rem] text-[#394855]">Minnesota, United States</p>
                            </div>
                            <br />
                            <div className="social-icons p-[5px]">
                                <a
                                    href="https://github.com/Dungyy"
                                    className="github inline-block bg-[#333] text-[#394855] py-[8px] px-0 rounded-full text-center w-[36px] h-[36px] transition-all duration-300 mr-[10px]"
                                    aria-label="GitHub Profile"
                                >
                                    <i className="bx bxl-github"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/erick-munoz-2532ab219/"
                                    className="linkedin inline-block bg-[#333] text-[#394855] py-[8px] px-0 rounded-full text-center w-[36px] h-[36px] transition-all duration-300 mr-[10px]"
                                    aria-label="LinkedIn Profile"
                                >
                                    <i className="bx bxl-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="contact" className="lg:w-7/12 mt-5 lg:mt-0 flex items-stretch">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;