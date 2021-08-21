import React from 'react';
import Button from './Button';

export default class First extends React.Component{

    constructor (){
        super();
        this.state = {
            Name : 'ibrahim',
            Job : 'full-stack developer'
        }
    }

    changeName = () => {
        this.setState({
            Name : 'Ali',
        })
    }

    changeJob(Job){
        this.setState({
            Job
        })
    }

    render(){
        const {Name , Job} = this.state;
        return (
            <>
                <h1>This is first test from class component</h1>
                <h2>My Name Is {Name} And My Job Is {Job}</h2>
                <Button content={'Change Your Name'} whileClick={()=> {this.changeName()}}/>
                <Button content={'Change Your Job'} whileClick={()=> {this.changeJob('Back End Developer')}}/>
            </>
        )
    }
}