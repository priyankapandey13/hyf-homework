import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
// import moment from 'moment';

// import 'bootstrap/dist/css/bootstrap.min.css';

class Example extends React.Component {
  
  state = {
    startDate: new Date()
  };
 
  handleChanges = date => {
    this.setState({
      startDate: date
    });
    
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChanges}
        name="startDate"
        dateFormat="MM/dd/yyyy"
        onSelect={this.props.onClick}
      />
    );
  }
}

export default Example; 