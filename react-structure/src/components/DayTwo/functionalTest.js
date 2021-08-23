import React from 'react';
import { useState , useEffect } from 'react';

const FunctionlTest = () => {
    /*
    **
    **there are functions in functional component like class (useEffect) and (useState)
    **
    */

    //first useState 
    const [skillList ,setSkillList] = useState([
        {
            name : 'HTML',
            value : '36%'
        },
        {
            name : 'PHP',
            value : '70%'
        },
        {
            name : 'Laravel',
            value : '50%'
        },
    ]);


    //============== if have dependences and return => will unmount
    useEffect(() => {
        return () => {
            console.log('UseEffect : Will UnMount')
        }
    }, ['input']);

    //============== if have dependences only => Did update 
    useEffect(() => {
        console.log('UseEffect : Did Update')
    }, ['input']);


    //============== if have't dependences => Did Mount
    useEffect(() => {
        console.log('UseEffect : Did Mount')
    }, []);


    return(
        // we can use skillList without destruct 
        <>
            {skillList.map(skill => 
            <div>
                <h1>{skill.name}</h1>
                <h3>{skill.value}</h3>
            </div>
            )}
        </>

    )

}

export default FunctionlTest;