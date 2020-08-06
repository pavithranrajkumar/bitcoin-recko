import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/style.css';

import App from './containers/App';


ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
