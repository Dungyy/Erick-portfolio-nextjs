// src/components/sections/Resume.js
const Resume = () => {
    return (
        <section id="resume" className="resume py-[60px] overflow-hidden">
            <div className="container mx-auto">
                <div className="section-title tech">
                    <h2 className="text-[32px] font-bold mb-[20px] pb-[20px] relative text-[#1f5297]">Professional Experience</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2" data-aos="fade-up">
                        <h3 className="resume-title text-[26px] font-bold mt-[20px] mb-[20px] text-[#1f5297]">Education & Certifications</h3>

                        <div className="resume-item pl-[20px] pb-[20px] -mt-[2px] border-l-2 border-[#1f5297] relative">
                            <h4 className="leading-[18px] text-[18px] font-semibold uppercase font-poppins text-[rgba(240,248,255,0.825)] mb-[10px]">
                                Ethical Hacking Bootcamp
                            </h4>
                            <p className="text-[rgba(255,255,255,0.5)]"><em>zSecurity</em></p>
                            <p className="text-[rgba(255,255,255,0.5)]">
                                Specialized training in penetration testing methodologies, vulnerability assessment, and security best practices
                            </p>
                            <div
                                className="absolute w-[16px] h-[16px] rounded-[50px] -left-[9px] top-0 bg-white border-2 border-[#1f5297]"
                            ></div>
                        </div>

                        <div className="resume-item pl-[20px] pb-[20px] -mt-[2px] border-l-2 border-[#1f5297] relative">
                            <h4
                                className="leading-[18px] text-[18px] font-semibold uppercase font-poppins text-[rgba(240,248,255,0.825)] mb-[10px] cursor-pointer hover:text-[#1f5297]"
                                onClick={() => window.open('https://udemy-certificate.s3.amazonaws.com/image/UC-55d2d303-d44d-4ffd-b4ce-b4805bf0a3b8.jpg?v=1652076006000')}
                            >
                                2022 Web Development Bootcamp
                            </h4>
                            <p className="text-[rgba(255,255,255,0.5)]"><em>Udemy</em></p>
                            <p className="text-[rgba(255,255,255,0.5)]">
                                Comprehensive training in full-stack web development technologies and methodologies
                            </p>
                            <div
                                className="absolute w-[16px] h-[16px] rounded-[50px] -left-[9px] top-0 bg-white border-2 border-[#1f5297]"
                            ></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title text-[26px] font-bold mt-[20px] mb-[20px] text-[#1f5297]">Professional Experience</h3>

                        <div className="resume-item pl-[20px] pb-[20px] -mt-[2px] border-l-2 border-[#1f5297] relative">
                            <h4
                                className="leading-[18px] text-[18px] font-semibold uppercase font-poppins text-[rgba(240,248,255,0.825)] mb-[10px] cursor-pointer hover:text-[#1f5297]"
                                onClick={() => window.open('https://nteglobal.com/')}
                            >
                                Nova-Tech Engineering
                            </h4>
                            <p className="text-[rgba(255,255,255,0.5)]"><em>Software Developer</em></p>
                            <h5
                                className="text-[16px] bg-[rgba(255,255,255,0.155)] py-[5px] px-[15px] inline-block font-semibold mb-[10px] rounded cursor-pointer hover:text-[#1f5297]"
                                onClick={() => window.open('https://www.linkedin.com/company/nova-tech-engineering/')}
                            >
                                Current Position
                            </h5>
                            <p className="text-[rgba(255,255,255,0.5)]">
                                Developing and maintaining web applications, implementing coding best practices,
                                and collaborating with cross-functional teams to deliver high-quality software solutions
                            </p>
                            <div
                                className="absolute w-[16px] h-[16px] rounded-[50px] -left-[9px] top-0 bg-white border-2 border-[#1f5297]"
                            ></div>
                        </div>

                        <div className="resume-item pl-[20px] pb-[20px] -mt-[2px] border-l-2 border-[#1f5297] relative">
                            <h4 className="leading-[18px] text-[18px] font-semibold uppercase font-poppins text-[rgba(240,248,255,0.825)] mb-[10px]">
                                Independent Developer
                            </h4>
                            <p className="text-[rgba(255,255,255,0.5)]"><em>Web Development Consultant</em></p>
                            <p className="text-[rgba(255,255,255,0.5)]">
                                Providing custom web development services to clients across various industries, with a focus on
                                responsive design, performance optimization, and security implementation
                            </p>
                            <div
                                className="absolute w-[16px] h-[16px] rounded-[50px] -left-[9px] top-0 bg-white border-2 border-[#1f5297]"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;