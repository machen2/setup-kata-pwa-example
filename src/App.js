import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      shouldDisplay: false,
      displayText: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
      shouldDisplay: false
    })
  };

  handleClick = () => {
    this.updateDisplayText();
    this.setState({
      shouldDisplay: true
    });
  };

  updateDisplayText() {
    if (this.state.inputValue % 3 === 0) {
      this.setState({displayText: 'Fizz'});
    } else if (this.state.inputValue === 5) {
        this.setState({displayText: 'Buzz'});
    } else {
      this.setState({displayText: this.state.inputValue});
    }
  }

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
