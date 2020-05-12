import React from 'react';
import Context from './context'

function Searchuser(){
    const { handleChange } = React.useContext(Context);
    return <input type="text" placeholder="Input user name here" onChange={handleChange} />
}

export default Searchuser;