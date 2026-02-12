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
            <div style={{
                background: '#FFFFFF',
                minHeight: '100vh',
                paddingTop: '120px',
                width: '100%',
                maxWidth: '1440px',
                margin: '0 auto'
            }}>
                {/* Hero Section - Title and Subtitle */}
                <section style={{
                    textAlign: 'center',
                    padding: '0 20px',
                    marginBottom: '40px'
                }}>
                    {/* About Me Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontFamily: '"SF Pro Display", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '50px',
                            lineHeight: '60px',
                            color: '#000000',
                            margin: '0 0 10px 0'
                        }}
                    >
                        About Me
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontFamily: '"SF Pro Display", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '42px',
                            color: '#6F6864',
                            margin: '0 auto',
                            maxWidth: '1105px'
                        }}
                    >
                        I design thoughtful, human-centered experiences that turn complex problems into clarity.
                    </motion.p>
                </section>

                {/* Divider Line */}
                <div style={{
                    width: '100%',
                    maxWidth: '1440px',
                    height: '1px',
                    background: '#D9D9D9',
                    margin: '0 auto 60px auto'
                }} />

                {/* WHO AM I Section */}
                <section style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px',
                    padding: '0 72px',
                    marginBottom: '60px'
                }}>
                    {/* Left side - Icon and Label */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        minWidth: '200px'
                    }}>
                        <motion.img
                            src={logo}
                            alt="Seashell"
                            style={{ width: '59px', height: '59px' }}
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                        />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '30px',
                                lineHeight: '36px',
                                color: '#FF6F61',
                                marginTop: '12px'
                            }}
                        >
                            WHO AM I?
                        </motion.span>
                    </div>

                    {/* Right side - Bio content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            flex: 1,
                            minWidth: '300px',
                            maxWidth: '875px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '22px',
                            marginLeft: '140px'
                        }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '50px',
                                lineHeight: '60px',
                                color: '#6F6864',
                                marginLeft: '250px'
                            }}
                        >
                            Hi I'm Desiree, a UX Designer with a passion for storytelling and creating digital experiences that connect people in meaningful ways.
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            My journey began in the Marines, where I learned resilience, empathy, and adaptability, qualities that now shape how I design with intention.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            As an early product designer at Bonder, I helped define and grow the product from its early stages, leading initiatives that simplified workflows, built consistency, and made complex systems approachable.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            I believe great design tells a story — one that uplifts, empowers, and creates connection.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
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
                            style={{
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px 30px',
                                width: 'fit-content',
                                height: '60px',
                                background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
                                borderRadius: '10px',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '24px',
                                lineHeight: '29px',
                                color: '#FFFFFF',
                                marginLeft: "250px",
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
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        padding: '0 72px',
                        marginBottom: '80px'
                    }}
                >
                    {[img1, img2, img3].map((img, index) => (
                        <motion.div
                            key={index}
                            style={{
                                flex: '1 1 0',
                                maxWidth: '380px',
                                borderRadius: '16px',
                                overflow: 'hidden',
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
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.section>

                {/* BACKGROUND & EDUCATION Section */}
                <section style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px',
                    padding: '0 72px',
                    marginBottom: '30px',
                    marginTop: '30px',
                }}>
                    {/* Left side - Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ minWidth: '200px' }}
                    >
                        <span style={{
                            fontFamily: '"SF Pro Display", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '30px',
                            lineHeight: '36px',
                            color: '#FF6F61',
                            marginTop: '12px'
                        }}>
                            BACKGROUND & EDUCATION
                        </span>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            flex: 1,
                            minWidth: '300px',
                            maxWidth: '1100px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            marginLeft: '-10px',
                            marginTop: '30px',
                        }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '50px',
                                lineHeight: '60px',
                                color: '#6F6864',
                                marginLeft: '250px'
                            }}
                        >
                            My background in Interactive Media taught me that great design is more than visuals . It's about crafting experiences that connect people.
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            My background in Interactive Media has given me a foundation in blending storytelling, design, and technology to create experiences that feel intuitive and meaningful.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            Through hands-on coursework and creative projects, I've learned how human behavior, aesthetics, and usability intersect, and how thoughtful design can make complex ideas feel simple.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            Alongside my studies, I completed the Google UX Design Certificate, where I gained practical experience in user research, wireframing, and usability testing.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            This program helped me strengthen my process-driven side and apply design thinking to real-world challenges.
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#676564',
                                marginLeft: "250px",
                            }}
                        >
                            These experiences have shaped the way I approach every project: with curiosity, empathy, and a genuine desire to create designs that connect with people on a deeper level.
                        </motion.p>

                        {/* Education Card */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                display: 'flex',
                                width: '100%',
                                maxWidth: '1600px',
                                marginLeft: '200px',
                                marginTop: '30px',
                                marginBottom: '30px',

                            }}
                        >
                            <div style={{
                                display: 'flex',
                                width: '100%',
                                background: '#FFF9F7', // Very light peach/beige
                                border: '1px solid #FF6F61',
                                borderRadius: '0px', // Sharp corners as per image
                                overflow: 'hidden',
                            }}>
                                {/* Coral accent bar */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 'auto' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    style={{
                                        width: '8px',
                                        background: '#FF6F61',
                                        flexShrink: 0,
                                        borderRadius: '3px',
                                    }}
                                />

                                {/* Card Content */}
                                <div style={{
                                    boxSizing: 'border-box',
                                    flex: 1,
                                    padding: '48px 60px',
                                }}>
                                    <h3 style={{
                                        fontFamily: '"SF Pro Display", sans-serif',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        fontSize: '28px',
                                        lineHeight: '34px',
                                        color: '#000000',
                                        margin: '0 0 32px 0'
                                    }}>
                                        Education
                                    </h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                                        {/* Education Item 1 */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <span style={{
                                                fontFamily: '"SF Pro Display", sans-serif',
                                                fontWeight: 700,
                                                fontSize: '20px',
                                                color: '#000000'
                                            }}>
                                                Bachelor of Science – Interactive Media (In Progress)
                                            </span>
                                            <span style={{
                                                fontFamily: '"SF Pro Display", sans-serif',
                                                fontStyle: 'italic',
                                                fontSize: '20px',
                                                color: '#000000'
                                            }}>
                                                University of Miami
                                            </span>
                                            <span style={{
                                                fontFamily: '"SF Pro Display", sans-serif',
                                                fontSize: '18px',
                                                color: '#888888',
                                                marginTop: '4px'
                                            }}>
                                                Focus: UX Design, Visual Design & Interactive Technologies
                                            </span>
                                        </div>

                                        {/* Education Item 2 */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <span style={{
                                                fontFamily: '"SF Pro Display", sans-serif',
                                                fontWeight: 700,
                                                fontSize: '20px',
                                                color: '#000000'
                                            }}>
                                                User Experience Certification – Google (2023)
                                            </span>
                                            <span style={{
                                                fontFamily: '"SF Pro Display", sans-serif',
                                                fontStyle: 'italic',
                                                fontSize: '20px',
                                                color: '#000000'
                                            }}>
                                                Coursera
                                            </span>
                                            <span style={{
                                                fontFamily: '"SF Pro Display", sans-serif',
                                                fontSize: '18px',
                                                color: '#888888',
                                                marginTop: '4px'
                                            }}>
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
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '30px',
                                lineHeight: '42px',
                                color: '#6F6864',
                                margin: 0,
                                maxWidth: '881px',
                                marginLeft: '250px',
                                marginBottom: '40px'
                            }}
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
