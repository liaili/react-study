import React from './react';
import ReactDOM from './react-dom';

class Welcome extends React.Component {
  render() {
    return React.createElement('h1', {
      className: 'title',
      style: {
        color: 'red',
      }
    }, 'hello2', React.createElement('span', null, 'world2'))
  }
}

var element  = React.createElement(Welcome, {})

ReactDOM.render(
  element,
  document.getElementById('root')
);

