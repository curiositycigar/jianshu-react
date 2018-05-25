import * as React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom'
import NotFound from './components/NotFound'
import SignIn from './containers/SignIn'
import SignUp from './containers/SignUp'
import Home from './containers/Home'
import "./App.css";

class App extends React.Component<any, any> {
  public props: any

  constructor(props: any) {
    super(props)
  }

  public render() {
    console.log(this.props.children)
    return (
      <HashRouter>
        <Switch>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={Home}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
