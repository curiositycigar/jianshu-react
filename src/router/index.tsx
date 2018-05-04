/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'
import {
  HashRouter,
} from 'react-router-dom'
import App from '../App'
// import propTypes = require('prop-types')
// import classNames = require('classnames')
// import {omit} from 'lodash'
class RouterConfig extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }

  public render () {
    return (
      <HashRouter>
        <App/>
      </HashRouter>
    )
  }
}

export default RouterConfig