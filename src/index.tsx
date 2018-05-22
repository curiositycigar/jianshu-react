import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import App from './App';
import './index.css';
import reduxDemo from './reduxDemo'
import registerServiceWorker from './registerServiceWorker';
reduxDemo()

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();