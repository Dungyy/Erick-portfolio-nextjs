// src/components/sections/About.js
const About = () => {
    return (
        <section id="about" className="about py-[60px] overflow-hidden">
            <div className="about">
                <div className="section-title pb-[30px]">
                    <h2 className="text-[32px] font-bold mb-[20px] pb-[20px] relative text-[#1f5297]">About</h2>
                </div>

                <div className="flex flex-wrap">
                    <div className="lg:w-2/12 dungy-pic" data-aos="fade-right">
                        {/* Optional profile image can be added here */}
                    </div>
                    <div className="lg:w-10/12 pt-4 lg:pt-0 content ml-[20px]" data-aos="fade-left">
                        <br />
                        <h3 className="font-bold text-[26px] text-[#1f5297]">Software Developer</h3>
                        <p className="about-p block text-[rgb(135,150,156)] text-[20px] leading-[42px]" data-aos="fade-up" data-aos-delay="200">
                            Welcome to my portfolio. I&apos;m Erick Munoz, a full-stack software developer passionate about creating
                            clean, effective solutions that solve real business problems.
                            <br /><br />
                            My tech journey began after overcoming significant life challenges, including cancer, which inspired
                            my career change. These experiences taught me resilience and perspective that I bring to every project.
                            <br /><br />
                            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and develop responsive web
                            applications with a strong focus on security. My cybersecurity background ensures I build solutions
                            that are both functional and secure.
                            <br /><br />
                            I&apos;m committed to continuous learning and staying current with technology trends. When I&apos;m not coding,
                            I maintain balance through activities that fuel my creativity and problem-solving abilities.
                            <br /><br />
                            I&apos;m always open to discussing new projects where we can create impactful digital solutions together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;