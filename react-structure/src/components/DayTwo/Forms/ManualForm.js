import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const ManualForm = (props) => {

    const history = useHistory()

    const [userInformation, setUserInformation] = useState(
        {
            name: '',
            password: ''
        }
    );

    const [userInformationErr, setUserInformationErr] = useState({
        nameErr: null,
        passwordErr: null
    });

    const [inputType, setInputType] = useState({
        type: 'password'
    })

    var emailPattern = "^(.+)@(\\S+)$";


    const changestatus = (e) => {
        if (e.target.name === 'name') {
            setUserInformation({
                //===========================> we have to use spread to modify what we need only <==================//
                ...userInformation,
                name: e.target.value
            });
            (e.target.value.length == 0) ? setUserInformationErr({
                ...userInformationErr,
                nameErr: 'This field is required'
            }) : (e.target.value.length < 5) ? setUserInformationErr({
                ...userInformationErr,
                nameErr: 'Min character is 5'
            }) : (userInformation.name.match(emailPattern) == null) ? setUserInformationErr({
                ...userInformationErr,
                nameErr: 'Invalid Email Please write @ and .'
            }) : setUserInformationErr({
                ...userInformationErr,
                nameErr: null
            })
        };

        if (e.target.name === 'password') {
            setUserInformation({
                ...userInformation,
                password: e.target.value
            });
            (e.target.value.length == 0) ? setUserInformationErr({
                ...userInformationErr,
                passwordErr: 'this field is required'
            }) : (e.target.value.length < 8) ? setUserInformationErr({
                ...userInformationErr,
                passwordErr: 'Min password is 8'
            }) : setUserInformationErr({
                ...userInformationErr,
                passwordErr: null
            })
        };
    };



    const submit = () => {
        (userInformation.name.length == 0) && setUserInformationErr({
            ...userInformationErr,
            nameErr: 'this field is required'
        });
        (userInformation.password.length == 0) && setUserInformationErr({
            ...userInformationErr,
            passwordErr: 'this field is required'
        });
        if (userInformationErr.nameErr == null && userInformationErr.passwordErr == null) {
            console.log(userInformation);
            console.log({ email: userInformation.name, password: userInformation.password })
            axios.post('http://localhost:8080/api/auth/login',
                { email: userInformation.name, password: userInformation.password })
                .then(response => {
                    console.log(response.data)
                    localStorage.token = response.data.token
                    history.push('/')
                }).catch(console.error)
        }
    }

    const showAndHide = () => {
        (inputType.type == 'password') ? setInputType({
            type: 'text'
        }) : setInputType({
            type: 'password'
        })
    }


    return (
        <>
            <form className="container mt-4 text-light">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="name" onChange={changestatus} value={userInformation.name} />
                    <small name="nameErr" className="text-danger fw-bold">{userInformationErr.nameErr}</small>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type={inputType.type} className="form-control" name="password" onChange={changestatus} value={userInformation.password} />
                    <input type="checkbox" onChange={showAndHide} />Show Password
                    <small name="passwordErr" className="text-danger fw-bold">{userInformationErr.passwordErr}</small>
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
