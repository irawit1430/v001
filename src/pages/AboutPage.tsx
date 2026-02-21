import React from 'react';
import { motion } from 'framer-motion';

// Import images
import img1 from '../assets/1st.png';
import img2 from '../assets/2nd.png';
import img3 from '../assets/3rd.png';
import logo from '../assets/logo.png';
import GetInTouchSection from '../components/sections/GetInTouchSection';

const AboutPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring' as const, stiffness: 100 }
        }
    };


    return (
        <>
            <div className="bg-white min-h-screen pt-[120px] w-full max-w-[1440px] mx-auto px-4">
                {/* Hero Section - Title and Subtitle */}
                <section className="text-center mb-10">
                    {/* About Me Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-['SF_Pro_Display',sans-serif] font-normal text-[40px] leading-tight text-black mb-2"
                    >
                        About Me
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="font-['SF_Pro_Display',sans-serif] font-normal text-[24px] md:text-[30px] md:leading-[36px] leading-relaxed text-[#6F6864] mx-auto max-w-[1105px]"
                    >
                        I design thoughtful, human-centered experiences that turn complex problems into clarity.
                    </motion.p>
                </section>

                {/* Divider Line */}
                <div className="w-full max-w-[1440px] h-px bg-[#D9D9D9] mx-auto mb-[60px]" />

                {/* WHO AM I Section */}
                <section className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 mb-[60px]">
                    {/* Left side - Icon and Label */}
                    <div className="flex items-start gap-2 min-w-[200px]">
                        <motion.img
                            src={logo}
                            alt="Seashell"
                            className="w-[50px] h-[50px] md:w-[59px] md:h-[59px]"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="font-['SF_Pro_Display',sans-serif] font-medium text-[24px] md:text-[30px] leading-[36px] text-[#FF6F61] mt-3"
                        >
                            WHO AM I?
                        </motion.span>
                    </div>

                    {/* Right side - Bio content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 min-w-[300px] max-w-[875px] flex flex-col gap-5 md:ml-0 lg:ml-[140px]"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-medium text-[32px] md:text-[50px] md:leading-[60px] leading-tight text-[#6F6864] md:ml-0 lg:ml-[250px]"
                        >
                            Hi I'm Desiree, a UX Designer with a passion for storytelling and creating digital experiences that connect people in meaningful ways.
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] md:text-[30px] md:leading-[36px] leading-relaxed text-[#676564] md:ml-0 lg:ml-[250px]"
                        >
                            My journey began in the Marines, where I learned resilience, empathy, and adaptability, qualities that now shape how I design with intention.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            As an early product designer at Bonder, I helped define and grow the product from its early stages, leading initiatives that simplified workflows, built consistency, and made complex systems approachable.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            I believe great design tells a story — one that uplifts, empowers, and creates connection.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            Outside of work, I love mentoring other creatives and exploring new ways to blend technology, empathy, and design.
                        </motion.p>

                        {/* View My Resume button */}
                        <motion.a
                            href={`${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex justify-center items-center px-8 w-fit h-[60px] rounded-[10px] no-underline cursor-pointer font-['SF_Pro_Display',sans-serif] font-medium text-[24px] text-white md:ml-0 lg:ml-[250px] shadow-lg hover:shadow-2xl transition-all duration-300"
                            style={{
                                background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
                            }}
                        >
                            View My Resume
                        </motion.a>
                    </motion.div>
                </section>

                {/* Photo Gallery - Side by Side */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-[60px] md:mb-[80px]"
                >
                    {[img1, img2, img3].map((img, index) => (
                        <motion.div
                            key={index}
                            className="w-full max-w-[400px] mx-auto rounded-[20px] overflow-hidden"
                            style={{
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)'
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                            <img
                                src={img}
                                alt={`About photo ${index + 1}`}
                                className="w-full h-[300px] sm:h-[400px] object-cover block"
                            />
                        </motion.div>
                    ))}
                </motion.section>

                {/* BACKGROUND & EDUCATION Section */}
                <section className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 mb-8 mt-8">
                    {/* Left side - Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="min-w-[200px]"
                    >
                        <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[24px] md:text-[30px] leading-[36px] text-[#FF6F61] mt-3 block">
                            BACKGROUND & EDUCATION
                        </span>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="flex-1 min-w-[300px] max-w-[1100px] flex flex-col gap-5 mt-8"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-medium text-[32px] md:text-[50px] md:leading-[60px] leading-tight text-[#6F6864] md:ml-0 lg:ml-[250px]"
                        >
                            My background in Interactive Media taught me that great design is more than visuals . It's about crafting experiences that connect people.
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] md:text-[30px] md:leading-[36px] leading-relaxed text-[#676564] md:ml-0 lg:ml-[250px]"
                        >
                            My background in Interactive Media has given me a foundation in blending storytelling, design, and technology to create experiences that feel intuitive and meaningful.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            Through hands-on coursework and creative projects, I've learned how human behavior, aesthetics, and usability intersect, and how thoughtful design can make complex ideas feel simple.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            Alongside my studies, I completed the Google UX Design Certificate, where I gained practical experience in user research, wireframing, and usability testing.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            This program helped me strengthen my process-driven side and apply design thinking to real-world challenges.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] leading-relaxed text-[#6f6864] md:ml-0 lg:ml-[250px]"
                        >
                            These experiences have shaped the way I approach every project: with curiosity, empathy, and a genuine desire to create designs that connect with people on a deeper level.
                        </motion.p>

                        {/* Education Card */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-[1600px] md:ml-0 lg:ml-[200px] my-8"
                        >
                            <div className="flex w-full bg-[#FFFAF6] border border-[#FF6F61] overflow-hidden">
                                {/* Coral accent bar */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 'auto' }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="w-[14px] bg-[#FF6F61] flex-shrink-0 rounded-[30px]"
                                />

                                {/* Card Content */}
                                <div className="flex-1 p-6 md:p-12">
                                    <h3 className="font-['SF_Pro_Display',sans-serif] font-normal text-[24px] md:text-[30px] md:leading-[36px] leading-[34px] text-black mb-6 md:mb-8">
                                        Education
                                    </h3>

                                    <div className="flex flex-col gap-8 md:gap-10">
                                        {/* Education Item 1 */}
                                        <div className="flex flex-col gap-1">
                                            <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[18px] md:text-[24px] md:leading-[29px] text-black">
                                                Bachelor of Science – Interactive Media (In Progress)
                                            </span>
                                            <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[18px] md:text-[24px] md:leading-[29px] text-black">
                                                University of Miami
                                            </span>
                                            <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[16px] md:text-[24px] md:leading-[29px] text-black mt-1">
                                                Focus: UX Design, Visual Design & Interactive Technologies
                                            </span>
                                        </div>

                                        {/* Education Item 2 */}
                                        <div className="flex flex-col gap-1">
                                            <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[18px] md:text-[24px] md:leading-[29px] text-black">
                                                User Experience Certification – Google (2023)
                                            </span>
                                            <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[18px] md:text-[24px] md:leading-[29px] text-black">
                                                Coursera
                                            </span>
                                            <span className="font-['SF_Pro_Display',sans-serif] font-medium text-[16px] md:text-[24px] md:leading-[29px] text-black mt-1">
                                                Hands-on training in user research, prototyping, and usability testing
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Additional text */}
                        <motion.p
                            variants={itemVariants}
                            className="font-['SF_Pro_Display',sans-serif] font-normal text-[20px] md:text-[30px] md:leading-[36px] leading-relaxed text-[#6F6864] max-w-[881px] md:ml-0 lg:ml-[250px] mb-10"
                        >
                            Beyond formal education, I'm a continuous learner who stays curious about emerging design trends and tools. I actively seek out workshops, online courses, and collaborative projects that challenge my thinking and strengthen my design process.
                        </motion.p>
                    </motion.div>
                </section>


            </div>
            <GetInTouchSection />
        </>
    );
};

export default AboutPage;
