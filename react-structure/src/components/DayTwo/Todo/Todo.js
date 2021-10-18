import React, { useState } from "react";
import { Form, Card, ListGroup, Button } from "react-bootstrap";
import "./todo.css";

const Todo = () => {
    const [tasks, setTask] = useState([
      {
        title: "wash car",
        id: 1,
      },
      {
        title: "do HomeWork",
        id: 2,
      },
      {
        title: "reversion Lessons",
        id: 3,
      },
    ]);
    const [value, setValue] = useState({
      title: " ",
      id: 0,
    });
  
    const handlerChange = (e) => {
      /* console.log(e.target.value) */
  
      setValue({
        title: e.target.value,
        id: 5,
      });
    };
    const submit = () => {
      const t = [...tasks, value];
      setTask(t);
      console.log(t);
    };
    const handelDelete = (index) => {
      /* tasks.splice(index,1) */
      console.log("delete", index);
      let newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTask(newTasks);
    };
  
    return (
      <>
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Todo List</Form.Label>
            <Form.Control
              type="email"
              placeholder="Write your task here"
              onChange={handlerChange}
              value={value.title}
            />
          </Form.Group>
          <Button variant="outline-primary" onClick={submit}>
            Submit
          </Button>
        </Form>
  
        <Card style={{ width: "18rem" }} className="card">
          <ListGroup variant="flush">
            {tasks.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.title}
                <Button
                  variant="outline-danger"
                  onClick={() => handelDelete(tasks.indexOf(item))}
                >
                  Delete
                </Button>{" "}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </>
    );
  };
  export default Todo;
