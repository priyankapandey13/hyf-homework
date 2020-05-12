import React from 'react';

const TodoListItems=(props) => {    
  const details = <div>
                    <span>{props.todoitem.login}</span>  
                    <img src={props.todoitem.avatar_url} alt={props.todoitem.avatar_url}></img>
                  </div>
  return <li>
            <div>
              {details}
            </div>
          </li>;
}

export default TodoListItems;