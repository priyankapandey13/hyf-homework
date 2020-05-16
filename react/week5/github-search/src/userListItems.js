import React from "react";
import Context from "./context";
import TodoListItems from "./TodoListItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ListItems() {
  const { Todo, state } = React.useContext(Context);
  const status = state.isLoading
    ? "Loading . . ."
    : state.Todo.length === 0
    ? "No results........"
    : "";
 
  return (
    <Container>
      <Row className="Userlist mx-auto ">
        <p className="mx-auto">{status}</p>
        {Todo.map((todoitem, index) => (
          <TodoListItems key={index} todoitem={todoitem} />
        ))}
      </Row>
    </Container>
  );
}
 
export default ListItems;
