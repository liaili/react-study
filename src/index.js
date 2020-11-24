import React from './react';
import ReactDOM from './react-dom';

function Welcome() {
  return React.createElement('h1', {
    className: 'title',
    style: {
      color: 'red',
    }
  }, 'hello1', React.createElement('span', null, 'world1'))
}

var element  = React.createElement(Welcome, {})

ReactDOM.render(
  element,
  document.getElementById('root')
);

