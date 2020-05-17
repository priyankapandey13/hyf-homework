import React from 'react';

const UserListItems=(props) => {
  return <li>
            <div>
              <span>{props.useritem.login}</span>  
              <img src={props.useritem.avatar_url} alt={props.useritem.avatar_url}></img>
            </div>
          </li>;
}

export default UserListItems;