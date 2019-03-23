import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import config from './config';

console.log(config);
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Home api endpoint <b>{config.home}</b> and full link <b>{config._home}</b>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
