import * as React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NotFound from './components/NotFound'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import Index from './containers/Index'
import "./App.css";

class App extends React.Component<any, any> {
  public props: any

  constructor(props: any) {
    super(props)
  }

  public render() {
    console.log(this.props.children)
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Index}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Redirect exact={true} from="/" to="/home"/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
