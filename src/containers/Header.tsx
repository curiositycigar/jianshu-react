/**
 * Created by YOU on 2018/5/8.
 */
import * as React from "react";
import {Menu, Input} from 'antd'
// const {SubMenu} = Menu
const Search = Input.Search
import './css/Header.css'
// import * as propTypes from 'prop-types'
// import * as classNames from 'classnames'
// import {omit} from 'lodash'

class Header extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }

  public render () {
    return (
      <header className="main-header">
        <nav>
          <h1>
            <a href="/">LOGO</a>
          </h1>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">其他</Menu.Item>
          </Menu>
          <div style={{lineHeight: '64px', padding: '0 20px'}}>
            <Search
              placeholder="input search text"
              onSearch={this.doSearch}
              style={{
                width: 200
              }}
            />
          </div>
        </nav>
        <div style={{lineHeight: '64px'}} className="sign-in-field">
          <a href="/">登录</a>
          <span>或</span>
          <a href="/">注册</a>
          {/*<Button href="/">登录</Button>*/}
          {/*<Button type="primary" href="/">注册</Button>*/}
        </div>
      </header>
    )
  }

  private doSearch (val: string) {
    console.log(val)
  }
}
export default Header