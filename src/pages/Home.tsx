import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Skills from '../components/Skills';

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
