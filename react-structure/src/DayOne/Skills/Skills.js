import './Skills.css';
import React from 'react';

const Skills = () => {
    return (
        <>
            <div className="skills" class="skills bg-dark text-center p-4">
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
                        <p class="lead fw-bold">Front End </p>
                        <p class="lead fw-bold">Back End </p>
                        <p class="lead fw-bold">Full Stack </p>
                        <p class="lead fw-bold">Web Design </p>
                    </div>
                    <div class="col-6">
                        <lable for="progress">HTML</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <lable for="progress">PHP</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <lable for="progress">Laravel</lable>
                        <div class="progress mb-4 mt-2">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: '50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <lable for="progress">Lenux</lable>
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
