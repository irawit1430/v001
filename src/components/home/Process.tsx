import React from 'react';
import { motion } from 'framer-motion';

import smilingSun from '../../assets/smiling sun.png';
import curvArrow from '../../assets/curv arro.png';

const steps = [
    { id: 1, title: "Research & Discovery", desc: "I start by understanding user needs, pain points, and goals through interviews, surveys, and competitive analysis." },
    { id: 2, title: "Strategy & Planning", desc: "Based on research insights, I develop information architecture, user flows, and wireframes to define the product strategy." },
    { id: 3, title: "Design & Iteration", desc: "I create high-fidelity designs and prototypes, iterating based on user feedback and usability testing results." },
    { id: 4, title: "Build & Launch", desc: "I start by understanding user needs, pain points, and goals through interviews, surveys, and competitive analysis." }
];

const Process: React.FC = () => {
    return (
        <section className="bg-white pt-4 relative">
            {/* Title — sits above the grey area */}
            <div className="max-w-[1440px] mx-auto px-4">
                <h2 className="font-['SF_Pro_Display',sans-serif] font-semibold text-[40px] text-[#ff6f61] text-center mb-8">
                    Design Process
                </h2>
            </div>

            {/* Grey area — wraps subtitle, decorations, and cards */}
            <div className="bg-[#f5f5f5] py-12">
                <div className="max-w-[1440px] mx-auto px-4">
                    {/* Sun + "How I make it happen" row */}
                    <div className="flex items-center justify-center gap-2 sm:gap-8 mb-2">
                        <motion.img
                            src={smilingSun}
                            alt=""
                            className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] object-contain flex-shrink-0"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                        />
                        <p className="font-['SF_Pro_Display',sans-serif] text-[26px] sm:text-[30px] text-black cursor-default whitespace-nowrap">
                            How I make it happen
                        </p>
                        <motion.img
                            src={smilingSun}
                            alt=""
                            className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] object-contain flex-shrink-0"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                        />
                    </div>

                    {/* Subtitle */}
                    <p className="font-['SF_Pro_Display',sans-serif] text-[22px] text-[#6f6864] text-center max-w-[700px] mx-auto mb-12">
                        My design process transforms complex ideas into intuitive, human-centered experiences.
                    </p>

                    {/* Animated Arrow */}
                    <div className="flex justify-center mb-8">
                        <motion.div className="relative w-[80px] h-[80px] cursor-pointer">
                            <motion.img
                                src={curvArrow}
                                alt=""
                                className="w-[80px] h-[80px] opacity-60 rotate-90 absolute inset-0"
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Step Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                    type: 'spring',
                                    stiffness: 100
                                }}
                                className="bg-white border border-[#d9d9d9] rounded-[10px] p-6 shadow-sm hover:shadow-lg cursor-pointer"
                            >
                                {/* Step Number Circle */}
                                <div className="flex justify-center mb-4">
                                    <div className="bg-[#ff9e80] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                                        <span className="font-['SF_Pro_Display',sans-serif] font-semibold text-[24px] text-black">
                                            {step.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-['SF_Pro_Display',sans-serif] font-semibold text-[20px] text-[#ff6f61] text-center mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="font-['SF_Pro_Display',sans-serif] text-[16px] text-[#6f6864] text-center leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
