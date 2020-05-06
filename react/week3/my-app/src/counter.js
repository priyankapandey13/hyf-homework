import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
//********************************************************************************************************************************************************* */

class Counter extends React.Component {
    state = { counter: this.props.initialCounter };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return <div>
       <p> You have used  {this.state.counter} seconds</p>

    </div>;
  }
}

export default Counter; 