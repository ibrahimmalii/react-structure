import React from 'react';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import References from '../References/References';

const Main = () => {

    const aboutMe = `lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you loem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you 
    lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you `;
    return (
        <>
            <Header Name={"Ibrahim Ali"}/>
            <AboutMe information = {aboutMe}/>
            <Skills />
            <Portfolio />
            <References />
        </>
    )
}


export default Main;