import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import _ from 'lodash';
import * as $ from 'jquery';

const Loading = ({ error }) => {
  if (error) {
    return 'Error encountered!!'
  } else {
    return <h3>Loading...!</h3>
  }
}

const AsyncChicken = Loadable({
  loader: () => import('./Chicken'),
  loading: Loading
})


class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    showComponent: false
  };

  handleClick() {
    this.setState({
      showComponent: true
    });
  }

  render() {
    if (this.state.showComponent) {
      return <AsyncChicken />;
    } else {
      return (
        <Fragment>
          <h1>Hello!</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </Fragment>
      );
    }
  }
}

// --- Duplication Testing -----
console.log(
  _.join(['Index', 'module', 'loaded!'], ' ')
);

$('body')
    .append($('<span>').text('Test...'));

export default App;
