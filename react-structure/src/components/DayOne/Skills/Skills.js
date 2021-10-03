import './Skills.css';
import React from 'react';

const Skills = (props) => {
    // console.log(props);
    return (
        <>
            <div className="skills" class="skills bg-dark text-center my-5 p-4">
            {/* <div className="skills bg-dark text-center p-4"> */}
                <div>
                    <h1>Skills</h1>
                    <p class="text-light lead">
                        This is lorem This is lorem This is lorem This is lorem This is lorem 
                        This is lorem This is lorem This is lorem This is lorem This is lorem 
                        This is lorem This is lorem This is lorem This is lorem This is lorem 
                    </p>
                </div>
                <div class="row text-light">
                    <div class="col-6 mb-4  p-5">
                        <h3>My Focus</h3>
                        <div className="border" class="bg-danger border mb-3"></div>
                        <p class="lead fw-bold">Front End Developer</p>
                        <p class="lead fw-bold">Back End Developer </p>
                        <p class="lead fw-bold">Full Stack (PHP)</p>
                        <p class="lead fw-bold">Web Design (Mern)</p>
                    </div>
                    <div class="col-6 pt-4">
                        <lable for="progress">PHP</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <lable for="progress">Laravel</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <lable for="progress">Angular</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <lable for="progress">React</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills;
