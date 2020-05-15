import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const TodoListItems = (props) => {
  // console.log(props);

  //****************************************************For User information****************************** */
// const followers=[];
// const URL = `https://api.github.com/users/${mainuser.login}/followers`;
// fetch(URL)
// .then((response) => response.json())
// .then((data)=> data)

// console.log(followers);
// const peoplename = followers.map(people => {
//   console.log(people.login);
//   return people.login;
//  });
// console.log(peoplename);

//****************************************************For User information****************************** */

  return (
    <Col md={3} className="mt-5">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={props.todoitem.avatar_url} />
        <Card.Body>
          <Card.Title>{props.todoitem.login}</Card.Title>
          <ButtonGroup>
            <Link key={props.todoitem.id} to={`/${props.todoitem.id}`}>
              See my profile here >
            </Link>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TodoListItems;
