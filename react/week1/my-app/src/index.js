import React from 'react';
import ReactDOM from 'react-dom';


function TodoListShow(props){
  return <li>{props.description}, {props.date}</li>
}


  
const root = document.getElementById('root');
ReactDOM.render(
  <ul>
    <TodoListShow description ="Get out of bed" date="Wed Sep 13 2017"/>
    <TodoListShow description ="Brush teeth" date="Thu Sep 14 2017"/>
    <TodoListShow description ="Eat breakfast" date="Fri Sep 15 2017"/>
  </ul>,
root);