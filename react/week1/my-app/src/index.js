import React from 'react';
import ReactDOM from 'react-dom';




function TodolistItem(props) {
  return <li>{props.todoitem.descridtion} {props.todoitem.time}</li>;
}
  

class TodoComponent extends React.Component {
  state = { 
    Todo : [ 
    {descridtion : 'Get out of bed', time : 'Wed Sep 13 2017'},
    {descridtion : 'Brush teeth', time : 'Thu Sep 14 2017'},
    {descridtion : 'Eat breakfast', time : 'Fri Sep 15 2017' },], }
  
  
    render() { 
    return (
      <React.Fragment>
        <ul>
        {this.state.Todo.map((todoitem, index)=>
        <TodolistItem 
        key={index}
        todoitem={todoitem}></TodolistItem>
      )}
      </ul>
      </React.Fragment>
    );
  }
}


const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <TodoComponent></TodoComponent>
  </React.StrictMode>   
  ,root);

  
