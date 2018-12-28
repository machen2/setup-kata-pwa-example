import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      displayText: e.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} />
        <p>{this.state.displayText}</p>
      </div>
    );
  }
}

export default App;
