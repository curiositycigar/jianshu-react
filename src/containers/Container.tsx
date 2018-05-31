/**
 * Created by YOU on 2018/5/8.
 */
import * as React from "react";
import './css/Container.css'
import {
  NavLink,
} from 'react-router-dom'
import {
  connect
} from 'react-redux'

import Search from '../components/Search'

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
      <div className="main-container">
        <header className="main-header">
          <div className="main-header-content">
            <h1>
              <a href="/">LOGO</a>
            </h1>
            <nav>
              <ul className="menu">
                <li>
                  <NavLink exact={true} to="/"><i className="iconfont icon-int"/>发现</NavLink>
                </li>
                <li>
                  <NavLink to="/attention"><i className="iconfont icon-addpeople_fill"/>关注</NavLink>
                </li>
                <li className="menu-own-submenu">
                  <NavLink to="/message"><i className="iconfont icon-remind_fill"/>消息</NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/message/aaa"><i className="iconfont icon-message"/>评论</NavLink>
                    </li>
                    <li>
                      <NavLink to="/message/aaa"><i className="iconfont icon-mail"/>简信</NavLink>
                    </li>
                    <li>
                      <NavLink to="/message/aaa"><i className="iconfont icon-document"/>投稿请求</NavLink>
                    </li>
                    <li>
                      <NavLink to="/message/aaa"><i className="iconfont icon-like"/>喜欢和赞</NavLink>
                    </li>
                    <li>
                      <NavLink to="/message/aaa"><i className="iconfont icon-emoji"/>关注</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="search">
                  <Search/>
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