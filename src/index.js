import React from './react';
import ReactDOM from './react-dom';

var element = React.createElement('h1', {
  className: 'title',
  style: {
    color: 'red',
  }
}, 'hello', React.createElement('span', null, 'world'))

ReactDOM.render(
  element,
  document.getElementById('root')
);

