import React from 'react';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import cover from '../../../images/01.jpg';
import personal from '../../../images/03.jpg';

const TodoList = () => {


    const [taskInfo, setTaskInfo] = useState([
        {
            name: 'final project',
        }, {
            name: 'Upwork tasks',
        }, {
            name: 'Team leader',
        }, {
            name: 'Good Brother',
        }
    ]);

    const [newTask, setNewTask] = useState({
        name: ''
    })

    const [taskErr, setTaskErr] = useState({
        taskErr: null,
    });

    const handleAddTask = (e) => {
        setNewTask({
            name: e.target.value
        })
    }

    const addNewTask = (e) => {
        setTaskInfo([
            ...taskInfo,
            newTask
        ])
        setNewTask({
            name : ''
        })
        
    }

    const handleDelete = (index) => {
        taskInfo.splice(index, 1)
        setTaskInfo([...taskInfo])
    }

    const handleUpdate = (index, value) => {
        taskInfo[index].name = newTask.name
        setTaskInfo([...taskInfo])
    }


    return (
        <>
            <img src={cover} alt="any img" style={{ width: "100%", height: "300px", marginTop: "20px", borderRadius: "20px" }} />
            <input type="text" value={newTask.name} onChange={handleAddTask} className="form-control mt-5" />
            <small>{taskInfo.taskErr}</small>
            <button onClick={addNewTask} name="btn" className="btn btn-dark my-2">ADD NEW TASK</button>
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
                    {taskInfo.map((task, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.name}</td>
                            <td><button className="btn btn-primary" onClick={() => handleUpdate(index)}>Update</button></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(index)} >Delete</button></td>
                        </tr>)}
                </tbody>
            </Table>
        </>
    )
}


export default TodoList;