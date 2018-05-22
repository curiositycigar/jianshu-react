import * as React from "react";
import {Button} from "antd";
import {
  HashRouter,
} from 'react-router-dom'
import {
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from './containers/Header'
import Home from './containers/Index'
import Home1 from './containers/Home'
import NotFound from './components/NotFound'
import MainContainer from './components/MainContainer'
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
      <HashRouter>
        <div className="App">
          <Header/>
          <div style={{display: 'none'}} className="App-header">
            <nav>
              <a href="/">繁体</a>
            </nav>
            <img src={logo} className="App-logo" alt="logo"/>
            <Link to="/">
              <Button type="primary">Root</Button>
            </Link>
            <Link to="/home">
              <Button type="primary">Home</Button>
            </Link>
          </div>
          <section style={{display: 'none'}}>
            <MainContainer>Layout</MainContainer>
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
      </HashRouter>
    );
  }
}

export default App;
