/**
 * Created by YOU on 2018/5/8.
 */
import * as React from "react";
import './css/Container.css'
import {
  Link,
} from 'react-router-dom'
import {
  connect
} from 'react-redux'
import {
  signIn,
  signOut,
} from '../actions'
// import * as classNames from 'classnames'
// import {omit} from 'lodash'

class Header extends React.Component<any, any> {
  public state = {
    active: '/'
  }

  constructor (props: any) {
    super(props)
  }

  public getUserField = (login: boolean) => {
    const {auth} = this.props
    if (login) {
      console.log(auth)
      return <div>
        <span>{auth.data.name}</span>
        <a href="javascript:;" onClick={this.logout}>登出</a>
      </div>
    } else {
      return <div style={{lineHeight: '64px'}} className="sign-in-field">
        <a href="javascript:;" onClick={this.login}>登录</a>
        <span>或</span>
        <a href="/#/signup">注册</a>
      </div>
    }
  }

  public login = () => {
    const name = 'lisa'
    const password = '123456'
    this.props.dispatch(signIn(name, password))
  }

  public logout = () => {
    this.props.dispatch(signOut())
  }

  public render () {
    const {
      auth,
    } = this.props
    return (
      <div>
        <header className="main-header">
          <div className="main-header-content">
            <nav>
              <h1>
                <a href="/">LOGO</a>
              </h1>
              <ul>
                <li>
                  <Link className="active" to="/">首页</Link>
                </li>
                <li>
                  <Link to="/home/article/xhfftbsrugbv">菜单项</Link>
                </li>
                <li>
                  <input type="text"/>
                </li>
              </ul>
            </nav>
            {this.getUserField(auth.login)}
          </div>
        </header>
        <section>{this.props.children}</section>
        <footer>this is footer</footer>
      </div>
    )
  }
}


const select = (state: any) => {
  return {
    auth: state.auth
  }
}

export default connect(select)(Header);