import React from "react";
import {Card, CardGroup, Col, Modal, Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUserAction, editUserAction } from "../action/action";
// import EditUserForm from "./EditUserForm";

const User = (props) => {
  const user = props.user;

  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState(user.title);
  const [note, setNote] = React.useState(user.note);


  const handleClose = () => setShow(false);
  
  const handleSubmit = () => {
    let updatedUser = {
      id: user.id,
      title: title,
      note: note,
    };
  dispatch(editUserAction(user.id, updatedUser));

  handleClose();
};

  // const handleShow = () => setShow(true);


  //   const handleDelete = (e) => {
  //     e.preventDefault();
  //     props.deleteUser(props.userInfo.id);
  //   }
    return (
      <>
      <div> 
        <CardGroup>
        <Col md="4" style={{ marginBottom: "1rem"}}>
          <Card border="success">
            <Card.Body style={{backgroundColor:"#FBAC1D"}}>
              <Card.Subtitle className="mb-2 text-muted">
                Notebook
              </Card.Subtitle>
              <Card.Title>{user.title}</Card.Title>
              <Card.Text>
                <p>{user.note}</p>
              </Card.Text>
              <Card.Link href="#">
                <Button variant="outline-secondary" size="sm" onClick={() => setShow(true)}>
                  Edit Note
                </Button>
              </Card.Link>
              <Card.Link href="#">
                <Button variant="outline-danger" size="sm" onClick={() => dispatch(deleteUserAction(user.id))}>
                  Delete Note
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        </CardGroup>

        {/* <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <Button variant="outline-info" onClick={() => setShow(true)}>Edit</Button>
        <Button variant="outline-danger" onClick={() => dispatch(deleteUserAction(user.id))}>Delete</Button> */}
      </div>
 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{backgroundColor:"aqua"}}>
            <Modal.Title>Edit Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:"lightgreen"}}>
            <h5>
              Title: <input 
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                placeholder="Title"
                />
            </h5>

            <h5>
              Note: <input 
              value={note}
              onChange= {(e) => setNote(e.target.value)}
              placeholder= "Type in your notes"
              />
            </h5>

          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#6AA4B6"}}>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
            </Button>
            <Button variant="outline-primary" onClick={handleSubmit}>
            Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

{/* 
        <Col md="4" style={{ marginBottom: "1rem" }}>
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                Contacts Information
              </Card.Subtitle>
              <Card.Title>{props.userInfo.name}</Card.Title>
              <Card.Text>
                <p>Location: {props.userInfo.location}</p>
                <p>Phone Number: {props.userInfo.phone}</p>
              </Card.Text>
              <Card.Link href="#">
                <Button variant="outline-info" size="sm" onClick={handleShow}>
                  Edit
                </Button>
              </Card.Link>
              <Card.Link href="#">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
 */}
    </>
  );
};

export default User;
