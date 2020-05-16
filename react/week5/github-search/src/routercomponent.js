import React from "react";
import Context from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Column from "react-bootstrap/Col";

function UserRouter() {
  const [followers, setFollowers] = React.useState([]);
  const { Todo } = React.useContext(Context);
  const { userId } = useParams();
  const mainuser = Todo.find((users) => users.id === Number(userId));
  //===================================================================For followers information */

  const URL = `https://api.github.com/users/${mainuser.login}/followers`;
  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setFollowers(data));
  }, [URL]);

  return (
    //=================================================================== Main user container */
    <Container fluid>
      <Container fluid className="personalprofile">
        <Card>
          <Row className="mx-auto ">
            <Column className="mb-5 mt-4">
              <Card.Img
                variant="top"
                src={mainuser.avatar_url}
                className="rounded-circle"
                mt="4"
              />
            </Column>
            <Column md={6}>
              <Card.Body className="mt-5 pt-4">
                <Card.Title>
                  <h2>Welcome {mainuser.login}</h2>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis lectus quis sem lacinia nonummy. Proin mollis lorem non
                  dolor.{" "}
                </Card.Text>
                <Card.Text>
                  <small>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </strong>
                  </small>
                </Card.Text>
                <Card.Text>
                  <a href="https://github.com/{mainuser.login}">
                    <svg
                      className="mr-2"
                      height="32"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>{" "}
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Column>
            <Column className="md-1 pl-0 pr-0">
              <div className="pt-5 mt-4">
                <Link to={"/"} className="gohomebtn mt-5">
                  {" "}
                  Go to Search{" "}
                </Link>
              </div>
            </Column>
          </Row>
        </Card>
      </Container>
      <Container fluid>
        {/*=================================================================== Followers container */}
        <Row className="flex-sm-fill">
          {followers.map((people) => (
            <div className="col-sm-2 mb-4">
              <div className="card card-fluid">
                <div className="card-body text-center">
                  <div className="avatar-parent-child">
                    <a href="/" className="avatar avatar-lg rounded-circle">
                      <img
                        alt="Imageplaceholder"
                        src={people.avatar_url}
                        className="img-fluid"
                      />
                    </a>
                    <span className="avatar-child avatar-badge bg-success"></span>
                  </div>
                  <h5 className="h6 mt-4 mb-0">{people.login}</h5>
                  <a
                    href="https://github.com/{people.login}"
                    className="d-block text-sm text-muted mb-2 mt-4"
                  >
                    <svg
                      className="mr-2"
                      height="32"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="32"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                      ></path>
                    </svg>
                  </a>
                  <div className="actions d-flex justify-content-between px-4">
                    <a href="/" className="action-item">
                      <i className="far fa-envelope"></i>
                    </a>
                    <a href="/" className="action-item">
                      <i className="far fa-phone"></i>
                    </a>
                    <a href="/" className="action-item">
                      <i className="far fa-share-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default UserRouter;
