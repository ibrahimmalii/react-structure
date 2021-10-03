import './References.css';
import React from 'react';

const References = () => {
    return(
        <>
        <div className="my-5 pt-3 bg-dark text-light">
                <div class="row px-2">
                    <div class="col-4">
                        <h5 class="fw-bold">Get In Touch</h5>
                        <span class="fa fa-google mx-1"></span><span class="small">eng.ibrahimmalii@gmail.com</span><br />
                        <span class="fa fa-twitter mx-1"></span><spa class="small">Ibrahim Ali</spa><br />
                        <span class="fa fa-phone mx-1"></span><spa class="small">01096121030</spa><br />
                    </div>
                    <div class="col-4 py-3 text-center">
                        <button class="btn btn-danger">Contact Me</button>
                    </div>
                    <div class="col-4 text-end align-items-center pt-5">
                        <span class="fa fa-google fs-3 mx-2"></span>
                        <span class="fa fa-linkedin fs-3 mx-2"></span>
                        <span class="fa fa-twitter fs-3 mx-2"></span>
                    </div>
                </div>
                <div class="text-center text-light pb-1">
                    <p class="small fw-bold ">Copyright &copy; is preserved 2021</p>
                </div>
        </div>
        </>
    )
}

export default References;