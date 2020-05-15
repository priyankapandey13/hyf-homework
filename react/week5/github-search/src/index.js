import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";
// for Bootstrap
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import UserRouter from "./routercomponent";
// Importing components
import Context from "./context";
import Searchuser from "./searchuser";
import ListItems from "./userListItems";

// Context
const Contextprovider = Context.Provider;

function FetchArray(event) {
  const URL = `https://api.github.com/search/users?q=${event}`;
  return fetch(URL).then((response) => response.json());
}

class TodoList extends React.Component {
  state = {
    isLoading: false,
    Todo: [],
    userId:''
  };

  fetchlist = (event) => {
    FetchArray(event)
      .then((data) => {
        this.setState({ Todo: data.items });
      })
      .catch((error) => {
        if (error) {
          alert(`This Process Failed : ${error}`);
          return;
        }
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleChange = (event) => {
    const inputevent = event.target.value;
    if (!inputevent) {
      return;
    }
    this.setState({ isLoading: true });
    this.fetchlist(inputevent);
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const contextValue = {
      state: this.state,
      Todo: this.state.Todo,
      handleChange: this.handleChange,
    };

    return (
      <Contextprovider value={contextValue}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <main role="main">
                <section className="jumbotron text-center stylebg">
                  <Container>
                    <h1 className="jumbotron-heading">Search app</h1>
                    <p className="lead text-muted">
                      This app is provided to search the developers from github
                      database, you can type the initials to search the user....
                    </p>
                    <Row>
                      <Searchuser />
                      <ListItems />
                    </Row>
                  </Container>
                </section>
              </main>
            </Route>
            <Route path="/:userId" exact>
              <UserRouter/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Contextprovider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById("root")
);

export default TodoList;