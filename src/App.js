import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: '',
      shouldDisplay: false
    }
  }

  handleChange = (e) => {
    this.setState({
      displayText: e.target.value,
      shouldDisplay: false
    })
  };

  handleClick = () => {
    this.setState({
      shouldDisplay: true
    });
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.shouldDisplay && <p>{this.state.displayText}</p>}
      </div>
    );
  }
}

export default App;
