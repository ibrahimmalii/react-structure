import './AboutMe.css';
import React from 'react';

const AboutMe = () =>{
    return (
        <div className="aboutMe my-3">
            <div class="row">
                <div class="col-5">
                    <h1 class="text-primary mt-4">About Me</h1>
                </div>
                <div class="col-7">
                    <p class="text-secondary">lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you 
                    lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you lorem how are you 
                    </p>
                    <button type="file" class="btn btn-dark"> Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;