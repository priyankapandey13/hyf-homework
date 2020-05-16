import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const TodoListItems = (props) => {
  return (
    <Col md={3} className="mt-5">
      <Card style={{ width: "100%" }}> 
        <Card.Img variant="top" src={props.todoitem.avatar_url} />
        <Card.Body>
          <Card.Title>{props.todoitem.login}</Card.Title>
          <ButtonGroup>
            <Link key={props.todoitem.id} to={`/${props.todoitem.id}`}>
              Personal Profile &#10095;
            </Link>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}; 

export default TodoListItems;
