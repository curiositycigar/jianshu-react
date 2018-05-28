/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'
import Container from '../components/Container'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home'
import Article from './Article'
// import classNames = require('classnames')
// import {omit} from 'lodash'

class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <Container>
        <Switch>
          <Route path="/home/article/:id" component={Article}/>
          <Route path="" component={Home}/>
        </Switch>
      </Container>
    )
  }
}

export default Index