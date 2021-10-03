import React from 'react';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import References from '../References/References';

// const Main = () => {

//     const aboutMe = `lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you loem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you 
//     lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you `;
//     return (
//         <>
//             <Header Name={"Ibrahim Ali"}/>
//             <AboutMe information = {aboutMe}/>
//             <Skills />
//             <Portfolio />
//             <References />
//         </>
//     )
// }


// export default Main;

export default class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            SkillsData : [{
                name : 'HTML',
                value : '60%'
            },{
                name : 'PHP',
                value : '50%'
            },{
                name : 'Angular',
                value : '80%'
            },{
                name : 'Laravel',
                value : '40%'
            }],
        }
    }


    render(){
        const {SkillsData} = this.state;
        const aboutMe = `lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you loem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you 
                        lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you `;

        return(
            <>
                <Header Name={"Ibrahim Ali Mohamed"}/>
                <AboutMe information = {aboutMe}/>

                {/* //this is how to loop and send data to child component */}
                {/* {SkillsData.map((skill)=> <Skills data={skill}/>)} */}
                <Skills/>
                <Portfolio />
                <References />
            </>
        )
    }
}