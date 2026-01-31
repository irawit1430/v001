import React from 'react';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Process from '../components/home/Process';
import Skills from '../components/home/Skills';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Projects />
            <Process />
            <Skills />
        </>
    );
};

export default Home;
