import React from "react";
import Context from "./context";
// import TodoList from './index';


import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

import Column from "react-bootstrap/Col";

// const FetchFollowers = (loginname) => {
  
 
// };

// usestate hooks, Useeffect Hooks


function UserRouter(props) {
  const { Todo } = React.useContext(Context);
  const { userId } = useParams();
  const mainuser = Todo.find((users) => users.id === Number(userId));
  // this.setState({ userId: mainuser.login });
// console.log(TodoList.state);

console.log(props);

  //****************************************************For followers information****************************** */

  const followers=[];
  const URL = `https://api.github.com/users/${mainuser.login}/followers`;
 fetch(URL)
 .then((response) => response.json())
 .then((data)=> followers.push(data))
 
 console.log(followers); // it gives me the array
 console.log(followers[0].login); // Can't access the value 

//  const peoplename = followers.map(people => {
//     console.log(people.login);
//     return people.login;
//    });
//   console.log(peoplename);
  // console.log(userId);

 
  //**********************************Need to sort the information of followers out here************************************************ */
  return (
    <Container fluid >
      <Container fluid className="personalprofile">
      <Card>
      <Row className="mx-auto ">{/* Userlist */}
        <Column md={3} className="ml-5 pl-5">
        <Card.Img variant="top" src={mainuser.avatar_url } className="rounded-circle mt-4"/>
        {/* <img src= className="card-img" alt="Profile picture"></img> */}
        </Column>
        <Column md={6} className="mt-5 mr-md-5">
          <Card.Body>
             <Card.Title><h2>Welcome {mainuser.login}</h2></Card.Title>
            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            <Card.Text><small><strong>Last updated 3 mins ago</strong></small></Card.Text>
            <Card.Text>events_url : {mainuser.events_url}<br></br>
           

            </Card.Text>
          </Card.Body>
        </Column>
        <Column md={3}>&nbsp;</Column>
      </Row></Card>
    </Container>
    <Container fluid >
    {/* Testing starts from here */}
    <div className="row flex-sm-fill">Hello
          
          { //followers.map((people)=> console.log(people.login))


              // <div className="col-sm-4">
              //   <div className="card card-fluid">
              //     <div className="card-body text-center">
              //       <div className="avatar-parent-child">
              //         <a href="/" className="avatar avatar-lg rounded-circle">
              //           <img alt="Imageplaceholder" src="https://demo.webpixels.io/purpose-application-ui-kit-v1.0.0/assets/img/theme/light/team-1-800x800.jpg" />
              //         </a>
              //         <span className="avatar-child avatar-badge bg-success"></span>
              //       </div>
              //       <h5 className="h6 mt-4 mb-0">Jenna Sullivan</h5>
              //       <a href="/" className="d-block text-sm text-muted mb-3">@jenna.sullivan</a>
              //       <div className="actions d-flex justify-content-between px-4">
              //         <a href="/" className="action-item">
              //           <i className="far fa-envelope"></i>
              //         </a>
              //         <a href="/" className="action-item">
              //           <i className="far fa-phone"></i>
              //         </a>
              //         <a href="/" className="action-item">
              //           <i className="far fa-share-alt"></i>
              //         </a>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            //  )
             }
             
            </div>
    {/* Testing ends here */}
    </Container>
    </Container>
  );
}

export default UserRouter;
