import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from "./counter";

//********************************************************************************************************************************************************* */
const TodoListItems=({todoitem, ToggleCompleted, DeleteTodo})=>{
  return <li className={ (todoitem.completed) ? "done": "not-done" }>
    <div>{todoitem.name}</div>
    <button onClick={DeleteTodo}>Delete</button>
    <input type="checkbox" checked={todoitem.completed} onChange={ToggleCompleted}/>
    <label></label>
  </li>;
}







class TodoList extends React.Component {
  // const TodoList =() => {
  state ={
    Todo : [
      {
        // id:'1',
        name: 'Get out of bed',
        completed: true,      
      },
      {
        // id:'2',
        name: 'Brush teeth',
        completed: false,      
      },
      {
        // id:'3',
        name: 'Eat breakfast',
        completed: false,
      },
      {
        // id:'4',
        name: 'Go office',
        completed: false,
      },
    ],
    taskname:"",
    value:'',
  };


  AddTodoItems=(taskname)=>{
    if(!this.state.taskname){
      alert("Please provide the taskname")
    return;
    }
    this.setState({
      Todo : [...this.state.Todo, {name : taskname, completed: false}],
    })
  };


  ToggleCompleted = (currentIndex) => {
   this.setState({
     Todo : this.state.Todo.map((todo, index) => {
       if (currentIndex === index){
        return{
          ...todo,
        completed : !todo.completed, };
       } else{
         return todo;
       }
     }),
   }); 
  };


  DeleteTodo = (currentIndex)=>{
    this.setState({
      Todo : this.state.Todo.filter((_todo, index)=> currentIndex !== index),
    });
  };

 
  handleChange=(event)=>{    
    this.setState({taskname: event.target.value});  
  }

  render(){
    if(!this.state.Todo.length){
      
      return <span className="voidmsz">There are no items to show</span>;
    }
    return (
      <React.Fragment>
        <h1>Todo list</h1>
        
        <Counter initialCounter={0} />        
        
        <ul>
          {this.state.Todo.map((todoitem, index)=> (
          <TodoListItems 
          key={index}
          todoitem={todoitem} 
          DeleteTodo={() => this.DeleteTodo(index)}
          ToggleCompleted={() => this.ToggleCompleted(index)}
          />
          ))
          }
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.AddTodoItems(this.state.taskname);
            this.setState({ taskname: "" });
          }}
        >
        <input
            type="text"
            id="addTodo"
            placeholder="Task name"
            value={this.state.taskname}
            onChange={this.handleChange}
          />
        <button type="submit">Add New Task</button>
          </form>
      </React.Fragment>
    )
      
  }

};


//********************************************************************************************************************************************************* */

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>    

  ,
  root);


