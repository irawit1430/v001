import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Fallback mailto
        window.location.href = `mailto:desireewalkerux@yahoo.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    };

    return (
        <div className="w-full min-h-screen bg-white font-['SF_Pro_Display',_sans-serif]">
            <div className="pt-[150px] pb-[100px] md:pt-[180px] w-full max-w-[1440px] mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Info */}
                    <div className="flex-1">
                        <ScrollReveal width="100%">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h1 className="font-['SF_Pro_Display',sans-serif] text-[40px] font-medium text-black leading-tight mb-6">
                                        Let’s Work Together
                                    </h1>
                                    <p className="font-['SF_Pro_Display',sans-serif] text-[20px] text-[#6f6864] leading-relaxed max-w-lg">
                                        I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 font-['SF_Pro_Display',sans-serif] text-[18px] text-[#6f6864]">
                                    <div>
                                        <span className="font-medium text-black block mb-1">Email</span>
                                        <a href="mailto:desireewalkerux@yahoo.com" className="hover:text-[#FF6F61] transition-colors">
                                            desireewalkerux@yahoo.com
                                        </a>
                                    </div>
                                    <div>
                                        <span className="font-medium text-black block mb-1">LinkedIn</span>
                                        <a
                                            href="https://www.linkedin.com/in/desiree-walker/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#FF6F61] transition-colors"
                                        >
                                            linkedin.com/in/desiree-walker/
                                        </a>
                                    </div>
                                    <div>
                                        <span className="font-medium text-black block mb-1">Resume</span>
                                        <a
                                            href={`${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#FF6F61] transition-colors"
                                        >
                                            View Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex-1">
                        <ScrollReveal width="100%" delay={0.2}>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#6f6864]">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-12 px-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#FF6F61] transition-colors text-lg"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#6f6864]">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-12 px-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#FF6F61] transition-colors text-lg"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#6f6864]">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-12 px-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#FF6F61] transition-colors text-lg"
                                        placeholder="Topic"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="font-['SF_Pro_Display',sans-serif] text-[16px] font-medium text-[#6f6864]">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full p-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#FF6F61] transition-colors text-lg resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full md:w-auto h-[60px] px-8 bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[10px] flex items-center justify-center font-['SF_Pro_Display',sans-serif] text-[30px] font-medium text-white transition-all shadow-none hover:shadow-[0_8px_20px_rgba(255,111,97,0.4)] hover:scale-105 border-none cursor-pointer"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
