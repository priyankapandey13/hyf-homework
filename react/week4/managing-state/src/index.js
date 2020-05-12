import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Importing components
import Context from './context';
import Searchuser from './searchuser';
import ListItems from './userListItems';

// Context
const Contextprovider = Context.Provider;

function FetchArray(event){
  const URL=`https://api.github.com/search/users?q=${event}`;
    return fetch(URL).then(response => response.json())        
}

class TodoList extends React.Component{
  state = {
    isLoading: false,
    Todo: [],
  }

  fetchlist=(event) => {    
    FetchArray(event).then(data => {     
      this.setState({ Todo: data.items})
    }).catch((error) => {
      if(error){
      alert(`This Process Failed : ${error}`);
      return
      }
    }).finally(() => {
      this.setState({isLoading:false})
    })
  }

  handleChange=(event) => {
    const inputevent = event.target.value;
    if(!inputevent){
      return
    }
    this.setState({isLoading:true})
    this.fetchlist(inputevent);
  }

  componentDidCatch(error, errorInfo) {    
    console.log(error, errorInfo);  
  }

  render(){
    const contextValue={
      state: this.state,
      Todo:this.state.Todo,
      handleChange:this.handleChange,    
    }
        
    return (
      <Contextprovider value={contextValue}>
        <h1>Todo list</h1>  
        <Searchuser/>
        <ListItems/>
      </Contextprovider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <TodoList/>    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
