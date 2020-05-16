import React from "react";
import Context from "./context";
import UserListItems from "./TodoListItems";
// for Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ListItems() {
  const { User, state } = React.useContext(Context);
  const status = state.isLoading
    ? "Loading . . ."
    : state.User.length === 0
    ? "No results........"
    : "";
 
  return (
    <Container>
      <Row className="Userlist mx-auto ">
        <p className="mx-auto">{status}</p>
        {User.map((useritem, index) => (
          <UserListItems key={index} useritem={useritem} />
        ))}
      </Row>
    </Container>
  );
}
 
export default ListItems;
