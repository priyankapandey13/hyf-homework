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
    console.log(this.state.startDate);
    
  };

  // handleSubmit=(e)=>{
  //       // e.preventDefault();
  //       let main ='';
  //       main = this.state.startDate ;  
  //       // console.log(main.format('L'));
  //       console.log(main);
  //     }
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChanges}
        name="startDate"
        dateFormat="MM/dd/yyyy"
        // onSelect={this.handleSubmit}
        onSelect={this.props.onClick}
              // onClose={this.props.selected}
      />
    );
  }
}


// class Example extends React.Component {

//   // constructor (props) {
//   //   super(props)
//     statestate = { startDate: new Date() }
//     // this.handleChanges = this.handleChanges.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   // }

//   handleChanges=(date)=>{
//     debugger;
//     this.setState({
//       startDate: date
//     })
//   }

//   handleSubmit=(e)=>{
//     e.preventDefault();
//     let main ='';
//     main = this.state.startDate ;  
//     console.log(main.format('L'));
//     console.log(main);
//   }

//   render() {
//     return (
//             <DatePicker
//               // selected={ this.state.startDate }
//               // defaultValue={this.state.date}
//               onChange={ this.props.onChange }
//               onSelect={this.handleSubmit}
//               onClose={this.props.onsubmit}
//               name="startDate"
//               dateFormat="MM/dd/yyyy"
//             />
//     );
//   }
// }

export default Example; 