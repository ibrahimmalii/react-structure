import React from 'react';
import { Table } from 'react-bootstrap';
import {useState} from 'react';
import cover from '../../../images/01.jpg';
import personal from '../../../images/03.jpg';

const TodoList = () => {


    const [taskInfo , setTaskInfo] = useState([{
        taskName : 'ibrahim',
    }]);

    const [taskErr , setTaskErr] = useState({
        taskErr : null,
    });

    const addNew = (e) => {

        console.log(e.target.name);
        if(e.target.name == 'btn'){
            const newTask = setTaskInfo([{
                taskName : 'Ali',
            }]);
            taskInfo.push(newTask);
            console.log(taskInfo[0])
        }
        
        // (e.target.value.length <= 5)?setTaskInfo({
        //     taskErr : 'e.target.value',
        // }) : setTaskErr({
        //     taskErr : null,
        // }) 
    }


    return (
        <>
            <img src={cover} alt="any img" style={{width : "100%", height : "300px", marginTop : "20px" , borderRadius : "20px"}} />
            <input type="text" className="form-control mt-5"  />
            <small>{taskInfo.taskErr}</small>
            <button onClick={addNew} name="btn" className="btn btn-dark my-2">ADD NEW TASK</button>
            <Table striped bordered hover variant="dark" className="mt-5 text-center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Update</th>
                        <th>Dlete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{taskInfo.map(skill => <p>{skill.taskName}</p>)}</td>
                        <td><button className="btn btn-info">Edit</button></td>
                        <td><button className="btn btn-danger">Remove</button></td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}


export default TodoList;