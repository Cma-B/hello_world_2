import React, { Component } from 'react';

class App extends Component {
  state = {
    greeting: "Hi",
    name: "World"
  }
  onGreetingHandler = () => {
    this.setState({greeting: "Good Morning"})
  }
  onNameHandler = () => {
    this.setState({name: "Juniors"})
  }

  render() {
    return (
      <div>
         <div>{this.state.greeting}{this.state.name} </div>
         <button onClick={this.onGreetingHandler}>Click me first!</button>
         <button onClick={this.onNameHandler}>Click me then!</button>
      </div>
    );
  }
}

export default App;