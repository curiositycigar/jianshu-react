/**
 * Created by YOU on 2018/5/8.
 */
import * as React from "react";
import './css/Container.css'
import {
  Link,
} from 'react-router-dom'
// import * as propTypes from 'prop-types'
// import * as classNames from 'classnames'
// import {omit} from 'lodash'

class Header extends React.Component<any, any> {
  public state = {
    active: '/'
  }

  constructor(props: any) {
    super(props)
  }

  public render() {
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
              </ul>
            </nav>
            <div style={{lineHeight: '64px'}} className="sign-in-field">
              <a href="/#/signin">登录</a>
              <span>或</span>
              <a href="/#/signup">注册</a>
              {/*<Button href="/">登录</Button>*/}
              {/*<Button type="primary" href="/">注册</Button>*/}
            </div>
          </div>
        </header>
        <section>{this.props.children}</section>
        <footer>this is footer</footer>
      </div>
    )
  }

  //
  // private doSearch (val: string) {
  //   console.log(val)
  // }
}

export default Header