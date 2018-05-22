/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'
import {
  Link,
  Route,
} from 'react-router-dom'
// import propTypes = require('prop-types')
// import classNames = require('classnames')
// import {omit} from 'lodash'

class Index extends React.Component<any, any> {
  public props: any

  constructor (props: any) {
    super(props)
  }

  public render () {
    return (
      <div>
        <Link to={`${this.props.match.url}/lisa`}>Lisa</Link>
        <h1>Home</h1>
        <Route path={`${this.props.match.url}/:name`} component={User}/>
      </div>
    )
  }
}

const User = (props: any) => (<div>
  {props.match.params.name}
</div>)

export default Index