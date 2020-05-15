import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from "./counter";
import moment from 'moment'; 
import 'react-datepicker/dist/react-datepicker.css';
import Example from "./react-datepicker";


const TodoListItems=(props) => {
  const editstate = props.todoitem.editstate;
  const details = editstate ? 
                  <input type="text" onChange={props.UpdateTodo} value={props.todoitem.description} /> : 
                  <div><div>{props.todoitem.description}</div>  <div>{props.todoitem.deadline}</div></div>
    return <li className={ (props.todoitem.completed) ? "done": "not-done" } onSubmit={props.Updatedesc}>  
      <div> {details} </div>
      <button onClick={props.EditTodo} >{editstate ? "Update" : "Edit"}</button>
      <button onClick={props.DeleteTodo} >Delete</button>
      <input type="checkbox" checked={props.todoitem.completed} onChange={props.ToggleCompleted}/>
      <label></label> 
  </li>;
}

function fetchlist(){
  const URL='https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';
  return fetch(URL).then(response => response.json())    
}

class TodoList extends React.Component {
  state = {
    description: '',
    deadline: '',
    checked: false,
    Todo: [],  
  }

  componentDidMount(){
    this.fetchTodos();
  }

  fetchTodos = () => {
    fetchlist().then(data => {
      this.setState({ Todo: data})
    })
  }

  AddTodoItems=(description, deadline) => {    
    if(!this.state.description){
      alert("Please provide the description")
    return;
    }else if(!this.state.deadline){
      alert("Please provide the date")
    return;
    }
    this.setState({
      Todo : [...this.state.Todo, {description : description, deadline : deadline, completed: false}],
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

  EditTodo = (props, description) => { 
    this.setState({
    Todo: this.state.Todo.map((list, index) => {
      if (props === index) { 
        return { ...list, editstate: !list.editstate, description: list.description,};
      } else {
        return list;
        }
      }),
    });
  }

  DeleteTodo = (currentIndex) => {
    this.setState({
      Todo : this.state.Todo.filter((_todo, index) => currentIndex !== index),
    });
  };
  
  UpdateTodo = (currentIndex, updates) => {

    (updates.description==='') ? (alert("Description can not be blank, please write something")) : 
    this.setState({
      Todo: this.state.Todo.map((list, index) => {
        if (currentIndex === index) {
          return { ...list, ...updates}  
        } else {
            return list;
          }
      }),
    });
  };
 
  handleChange=(event) => {   
    this.setState({description: event.target.value});
  }

  handletimeChange=(event) => {    
    const fulldate = moment(event).format("DD/MM/YYYY")
    const todaysdate = new Date();
    if(moment(event)._d < todaysdate)
    {
      alert("You are not allowed to select an older date, Try again");
    }else{
      this.setState({deadline: fulldate});
    }
  }

  handleSubmit=(event) => {
    event.preventDefault(); 
    this.AddTodoItems(this.state.description, this.state.deadline);
    this.setState({description: "", deadline: ""});
  }

  render(){
    if(!this.state.Todo.length){
      return <span className="voidmsz">There are no items to show</span>
    }
    return (
      <React.Fragment>
        <h1>Todo list</h1>
        <Counter initialCounter={0} />
        
        <ul>
          {this.state.Todo.map((todoitem, index) => ( 
          <TodoListItems 
          key={index}
          todoitem={todoitem}
          AddTodoItems={() => this.AddTodoItems(index)}
          DeleteTodo={() => this.DeleteTodo(index)}
          EditTodo={() => this.EditTodo(index)}
          UpdateTodo={(event) => this.UpdateTodo(index, {description: event.target.value})}
          ToggleCompleted={() => this.ToggleCompleted(index)}
          Todotest={() => this.Todotest(index)}
          />
          ))
          }
        </ul>
        <div className="form">
          <form>
            <input
              type="text" placeholder="Task description" defaultValue={this.state.description} onChange={this.handleChange} />
            <Example onClick={this.handletimeChange} value={this.state.deadline}/>
            <button type="submit" onClick={this.handleSubmit} >Add New Task</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>
  </React.StrictMode>    
  ,
  root);


