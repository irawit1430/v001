import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import images
import img1 from '../assets/1st.png';
import img2 from '../assets/2nd.png';
import img3 from '../assets/3rd.png';
import logo from '../assets/logo.png';

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

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
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
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '40px',
                        lineHeight: '48px',
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
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '25px',
                        lineHeight: '36px',
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
                padding: '0 76px',
                marginBottom: '60px'
            }}>
                {/* Left side - Icon and Label */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
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
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
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
                        gap: '24px'
                    }}
                >
                    <motion.h2
                        variants={itemVariants}
                        style={{
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '45px',
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
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '25px',
                            lineHeight: '36px',
                            color: '#676564',
                            margin: 0
                        }}
                    >
                        My journey began in the Marines, where I learned resilience, empathy, and adaptability, qualities that now shape how I design with intention. As an early product designer at Bonder, I helped define and grow the product from its early stages, leading initiatives that simplified workflows, built consistency, and made complex systems approachable. I believe great design tells a story — one that uplifts, empowers, and creates connection. Outside of work, I love mentoring other creatives and exploring new ways to blend technology, empathy, and design.
                    </motion.p>

                    {/* View My Resume button */}
                    <motion.a
                        href="#resume"
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
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '24px',
                            lineHeight: '29px',
                            color: '#FFFFFF'
                        }}
                    >
                        View My Resume
                    </motion.a>
                </motion.div>
            </section>

            {/* Photo Gallery - Stacked with Hover Reveal */}
            {(() => {
                const [isStackHovered, setIsStackHovered] = useState(false);
                const [activeImage, setActiveImage] = useState<number | null>(null);

                const getImageStyle = (index: number) => {
                    const baseRotations = [-8, 0, 8];
                    const hoveredRotations = [-15, 0, 15];
                    const hoveredX = [-200, 0, 200];
                    const hoveredY = [20, -30, 20];

                    const isActive = activeImage === index;

                    if (isActive) {
                        return {
                            rotate: 0,
                            x: hoveredX[index],
                            y: hoveredY[index] - 30,
                            scale: 1.2,
                            zIndex: 20
                        };
                    }

                    if (isStackHovered) {
                        return {
                            rotate: hoveredRotations[index],
                            x: hoveredX[index],
                            y: hoveredY[index],
                            scale: 1,
                            zIndex: index + 1
                        };
                    }

                    return {
                        rotate: baseRotations[index],
                        x: 0,
                        y: 0,
                        scale: index === 1 ? 1 : 0.95,
                        zIndex: index + 1
                    };
                };

                return (
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0 20px',
                            marginBottom: '80px'
                        }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '400px',
                                height: '400px',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setIsStackHovered(true)}
                            onMouseLeave={() => {
                                setIsStackHovered(false);
                                setActiveImage(null);
                            }}
                        >
                            {[img1, img2, img3].map((img, index) => (
                                <motion.div
                                    key={index}
                                    animate={getImageStyle(index)}
                                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                    onMouseEnter={() => isStackHovered && setActiveImage(index)}
                                    onMouseLeave={() => setActiveImage(null)}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: index === 1 ? '10px' : '20px',
                                        overflow: 'hidden',
                                        boxShadow: activeImage === index
                                            ? '0 30px 80px rgba(0, 0, 0, 0.4)'
                                            : '0 10px 40px rgba(0, 0, 0, 0.2)'
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery image ${index + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                );
            })()}

            {/* BACKGROUND & EDUCATION Section */}
            <section style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
                padding: '0 76px',
                marginBottom: '60px'
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
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '30px',
                        lineHeight: '36px',
                        color: '#FF6F61'
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
                        maxWidth: '875px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <motion.h2
                        variants={itemVariants}
                        style={{
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '50px',
                            lineHeight: '60px',
                            color: '#6F6864',
                            margin: 0,
                            maxWidth: '768px'
                        }}
                    >
                        My background in Interactive Media taught me that great design is more than visuals . It's about crafting experiences that connect people.
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '36px',
                            color: '#676564',
                            margin: 0
                        }}
                    >
                        My background in Interactive Media has given me a foundation in blending storytelling, design, and technology to create experiences that feel intuitive and meaningful. Through hands-on coursework and creative projects, I've learned how human behavior, aesthetics, and usability intersect, and how thoughtful design can make complex ideas feel simple. Alongside my studies, I completed the Google UX Design Certificate, where I gained practical experience in user research, wireframing, and usability testing. This program helped me strengthen my process-driven side and apply design thinking to real-world challenges. These experiences have shaped the way I approach every project: with curiosity, empathy, and a genuine desire to create designs that connect with people on a deeper level.
                    </motion.p>
                </motion.div>
            </section>

            {/* Education Card */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0 20px',
                    marginBottom: '60px'
                }}
            >
                <div style={{
                    display: 'flex',
                    maxWidth: '983px',
                    width: '100%'
                }}>
                    {/* Orange accent bar */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            width: '14px',
                            minHeight: '361px',
                            background: '#FF6F61',
                            borderRadius: '30px',
                            marginRight: '-4px',
                            zIndex: 1
                        }}
                    />

                    {/* Card background */}
                    <div style={{
                        boxSizing: 'border-box',
                        flex: 1,
                        padding: '32px 42px',
                        background: '#FFFAF6',
                        border: '1px solid #FF6F61'
                    }}>
                        <h3 style={{
                            fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '36px',
                            color: '#000000',
                            margin: '0 0 24px 0'
                        }}>
                            Education
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <p style={{
                                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '24px',
                                lineHeight: '29px',
                                color: '#000000',
                                margin: 0
                            }}>
                                Bachelor of Science – Interactive Media (In Progress)<br />
                                University of Miami<br />
                                Focus: UX Design, Visual Design & Interactive Technologies
                            </p>

                            <p style={{
                                fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '24px',
                                lineHeight: '29px',
                                color: '#000000',
                                margin: 0
                            }}>
                                User Experience Certification – Google (2023)<br />
                                Coursera<br />
                                Hands-on training in user research, prototyping, and usability testing
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Additional text */}
            <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    padding: '0 76px',
                    marginBottom: '80px',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <p style={{
                    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '30px',
                    lineHeight: '36px',
                    color: '#6F6864',
                    margin: 0,
                    maxWidth: '881px'
                }}>
                    Beyond formal education, I'm a continuous learner who stays curious about emerging design trends and tools. I actively seek out workshops, online courses, and collaborative projects that challenge my thinking and strengthen my design process.
                </p>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '100%',
                    padding: '80px 20px',
                    background: '#F5F5F5',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), inset 0px 4px 4px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: '#6F6864',
                        margin: '0 0 16px 0'
                    }}
                >
                    Have a project or story to share?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '28px',
                        lineHeight: '33px',
                        color: '#6F6864',
                        margin: '0 0 40px 0',
                        maxWidth: '622px'
                    }}
                >
                    I'd love to connect , learn about your goals, and design something that truly resonates with people.
                </motion.p>

                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16px 49px',
                        background: '#FF6F61',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '30px',
                        lineHeight: '36px',
                        color: '#FFFFFF'
                    }}
                >
                    Let's Talk
                </motion.a>
            </motion.section>
        </div>
    );
};

export default AboutPage;
