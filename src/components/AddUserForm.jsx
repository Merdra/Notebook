import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";
import {addUserAction} from "../action/action";
import { useDispatch} from "react-redux";


const AddUserForm = (props) => {
  console.log (props);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");


    // handleChange = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //      [e.target.name] : e.target.value
    //     })
    // }
const  handleSubmit =(e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      title: title,
      note: note,
    };

    dispatch(addUserAction(newUser));

    props.addUser(newUser);
    setTitle("");
    setNote("");
  }; 

    // this.props.addUser(this.state);
    // this.setState({
    //     name: "",
    //     location: "",
    //     phone: "",
    // })

    return (
      <div>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><h4 style={{color:"white"}}>Title</h4></Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Title of Note" 
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);              
            }}
            />
          </Form.Group>


          <Form.Group controlId="formBasicEmail">
            <Form.Label><h4 style={{color:"white"}}>Notes</h4></Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Type in your notes here" 
            name="note"
            height= "20rem"
            value={note}
            onChange={(e) => {
            setNote(e.target.value);              
            }}
            />
          </Form.Group>
<p />
          <Button variant="primary" aria-label="Second group" type="submit">
            Save Note
          </Button>
        </Form>
      </div>
    );
  }; 

  const sendActionAsProps = {
    createUser: addUserAction,
  };
  
  export default connect(null, sendActionAsProps)(AddUserForm);
