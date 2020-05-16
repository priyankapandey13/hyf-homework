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

function fetchArray(event){
  const URL=`https://api.github.com/search/users?q=${event}`;
    return fetch(URL).then(response => response.json())        
}

class UserList extends React.Component{
  state = {
    isLoading: false,
    User: [],
  }

  fetchlist=(event) => {    
    fetchArray(event).then(data => {     
      this.setState({ User: data.items})
    }).catch((error) => {
      if(error){
      alert(`This Process Failed : ${error}`);
      return
      }
    }).finally(() => {
      if(!inputevent){
        return
      }
      this.setState({isLoading:false})
    })
  }

  handleChange=(event) => {
    const inputevent = event.target.value;
    this.setState({isLoading:true})
    this.fetchlist(inputevent);
  }

  componentDidCatch(error, errorInfo) {    
    console.log(error, errorInfo);  
  }

  render(){
    const contextValue={
      state: this.state,
      User:this.state.User,
      handleChange:this.handleChange,    
    }
        
    return (
      <Contextprovider value={contextValue}>
        <h1>User list</h1>  
        <Searchuser/>
        <ListItems/>
      </Contextprovider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <UserList/>    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
