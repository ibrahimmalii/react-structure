import './Portfolio.css';
import React from 'react';

const Portfolio = () => {
    return(
        <>
        <div className="my-5">
            <h1 class="fw-bold">Portfolio</h1>
        </div>
        <div className="row mt-3">
            <div class="col-4">
                <div class="card text-center bg-info text-light" style={{height : '200px'}}>
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <div class="border bg-dark" className="border"></div>
                        <p class="lead fw-bold">
                            I'm a full stack developer and this is my first portfolio
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center bg-primary text-light" style={{height : '200px'}}>
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <div class="border bg-dark" className="border"></div>
                        <p class="lead fw-bold">
                            I'm a full stack developer and this is my first portfolio
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center bg-danger text-light" style={{height : '200px'}}>
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <div class="border bg-dark" className="border"></div>
                        <p class="lead fw-bold">
                            I'm a full stack developer and this is my first portfolio
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-4">
                <div class="card text-center bg-danger text-light" style={{height : '200px'}}>
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <div class="border bg-dark" className="border"></div>
                        <p class="lead fw-bold">
                            I'm a full stack developer and this is my first portfolio
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center bg-dark text-light" style={{height : '200px'}}>
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <div class="border bg-dark" className="border"></div>
                        <p class="lead fw-bold">
                            I'm a full stack developer and this is my first portfolio
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-center bg-info text-light" style={{height : '200px'}}>
                    <div class="card-body">
                        <h3>Web Design</h3>
                        <div class="border bg-dark" className="border"></div>
                        <p class="lead fw-bold">
                            I'm a full stack developer and this is my first portfolio
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Portfolio;