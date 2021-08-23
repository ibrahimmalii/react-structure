import React from 'react';
import { useState , useEffect } from 'react';

const ManualForm = () => {

    const [userInformation, setUserInformation] = useState([
        {
            name: '',
            password: ''
        }
    ]);


    const changestatus = (e) =>{
        if(e.target.name === 'name'){setUserInformation({
            ...userInformation,
            name : e.target.value
        })} ;
        if(e.target.name === 'password') {setUserInformation({
            ...userInformation,
            password : e.target.value
        })};
    }

    const submit = () => {

        console.log(userInformation);

    }


    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="name" onChange={changestatus} value={userInformation.name} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={changestatus} value={userInformation.password} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default ManualForm;
