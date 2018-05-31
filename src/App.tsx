import * as React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NotFound from './components/NotFound'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
import Article from './containers/Article'
import "./App.css";

class App extends React.Component<any, any> {
  public props: any

  constructor (props: any) {
    super(props)
  }

  public render () {
    console.log(this.props.children)
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/article/:id" component={Article}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
