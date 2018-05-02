import * as React from "react";
import {Button} from "antd";
import {
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './containers'
import Home1 from './containers/Home'
import NotFound from './components/NotFound'
import * as logo from "./logo.svg";
import "./App.css";

class App extends React.Component<any, any> {
  public props: any

  constructor (props: any) {
    super(props)
  }

  public render () {
    console.log(this.props.children)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Link to="/">
            <Button type="primary">Root</Button>
          </Link>
          <Link to="/home">
            <Button type="primary">Home</Button>
          </Link>
        </header>
        <section>
        <p className="App-intro">
          To get started, edit <code>s1rc/App.tsx</code> and save to reload.
        </p>
        <Switch>
          <Route path="/index" component={Home}/>
          <Route path="/home" component={Home1}/>
          <Redirect from="/" to="/index"/>
          <Route path="/*" component={NotFound}/>
        </Switch>
        </section>
        <footer>
          this is footer
        </footer>
      </div>
    );
  }
}

export default App;
