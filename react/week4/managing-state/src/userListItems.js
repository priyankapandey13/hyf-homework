import React from 'react';
import Context from './context'
import TodoListItems from './TodoListItems';

function ListItems(){
  const { Todo , state } = React.useContext(Context);  
  const status = state.isLoading
  ? "Loading . . ."
  : state.Todo.length === 0
  ? "No results"
  : "";

  return ( 
    <div>
      {status}
      <ul>
        {Todo.map((todoitem, index) => (  
          <TodoListItems 
            key={index}
            todoitem={todoitem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListItems;






