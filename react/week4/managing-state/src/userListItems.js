import React from 'react';
import Context from './context'
import UserListItems from './TodoListItems';

function ListItems(){
  const { User , state } = React.useContext(Context);
  if(!User){
    return "Nothing to show here";
  }
  const status = state.isLoading
  ? "Loading . . ."
  : state.User.length === 0
  ? "No results"
  : "";

  return ( 
    <div>
      {status}
      <ul>
        {User.map((useritem, index) => (  
          <UserListItems 
            key={index}
            useritem={useritem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListItems;






