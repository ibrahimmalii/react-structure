import Button from "./Button";
import {useState, useEffect} from 'react';


const Revision = () =>{

    const [info , setInfo] = useState({});

    useEffect(()=>{
        setInfo({
            fName : "Ali",
            age : 20
        })
    },[])


    const changeName = (name) =>{
        setInfo({
            age : 20,
            fName : name
        })
    };

    const changeAge = () => {
        setInfo ({
            fName : 'Ali',
            age : 30
        })
    }

    const clickME = 'Click'
    return(

        <>
            <h1>Welcome from react {info.fName}</h1>
            <h1>You are {info.age} years old</h1>
            <Button whileClick={(name)=>changeName('Ibrahim')} content="Change Name"></Button>
            <Button whileClick={changeAge} content="Change Age" />
        </>
    )
}

export default Revision;
