import React from 'react';
import { Container, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import User from './User';
import "../App.css";

const Users = () => {
  const users = useSelector ((state) => {
    return state.users;
  })
  return (
    <Container>
      <Row>
        {users.map((user, index) => {
          return <User user={user} key={user.id} />;
        })}
       </Row>
    </Container>
 );
};
 
 
//  //       {/* {
//             props.usersData.map((user, index) => {
//                 return ( 
//                 <User 
//                   userInfo={user} 
//                   key={user.id} 
//                   deleteUser={props.deleteUser}
//                   editUser={props.editUser}
//                   />
//                 );
//             })
//           } */}//

  
  
export default Users;
