// src/components/sections/About.js
const About = () => {
    return (
        <section id="about" className="about py-16 overflow-hidden bg-white">
            <div className="container mx-auto px-4">
                <div className="section-title pb-8">
                    <h2 className="section text-3xl font-bold mb-5 pb-5 relative border-b-2 border-gray-200 inline-block">About</h2>
                </div>

                <div className="flex flex-wrap text-center items-center justify-between">
                    <div className="w-full lg:w-2/12" data-aos="fade-right">
                        {/* Optional profile image can be added here */}
                    </div>
                    <div className="lg:w-10/12 pt-4 lg:pt-0 content ml-[20px]" data-aos="fade-left">
                        <br />
                        <h3 className="font-bold text-[26px]">Software Developer</h3>
                        <br/>
                        <p className="about-p block text-[20px] leading-[42px]" data-aos="fade-up" data-aos-delay="200">
                            Welcome to my portfolio. I&apos;m Erick Munoz, a full-stack software developer passionate about creating
                            clean, effective solutions that solve real business problems.
                            <br />
                            My tech journey began after overcoming significant life challenges, including cancer, which inspired
                            my career change. These experiences taught me resilience and perspective that I bring to every project.
                            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and develop responsive web
                            applications with a strong focus on security. My cybersecurity background ensures I build solutions
                            that are both functional and secure.
                            <br />
                            I&apos;m committed to continuous learning and staying current with technology trends. When I&apos;m not coding,
                            I maintain balance through activities that fuel my creativity and problem-solving abilities.
                            I&apos;m always open to discussing new projects where we can create impactful digital solutions together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
