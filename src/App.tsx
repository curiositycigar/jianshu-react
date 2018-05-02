import * as React from 'react';
import './App.css';
import {
  Button,
} from 'antd'
import * as logo from './logo.svg';

class App extends React.Component<any, any> {
  public render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <p className="App-intro">
          To get started, edit <code>s1rc/App.tsx</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
