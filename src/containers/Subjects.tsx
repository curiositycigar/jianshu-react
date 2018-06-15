/**
 * Created by YOU on 2018/6/4.
 */
import * as React from 'react'
import Container from './Container'
import Row from '../components/Row'
import Tabs from '../components/Tabs'
import TabItem from '../components/Tabs/TabItem'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import Icon from '../components/Icon'
// import * as propTypes from 'prop-types'
// import * as classNames from 'classnames'
// import {omit} from 'lodash'

import './css/Subjects.styl'

class Subject extends React.Component<{}, any> {
  public state = {
    value: '123'
  }

  constructor (props: {}) {
    super(props)
  }


  public handleClick(e: any) {
    console.log(e.target)
    setTimeout(() => {
      console.log('this is e:', e.target)
    }, 1000)
  }

  public render () {

    return (
      <Container>
        <Button onClick={this.handleClick}>按钮</Button>
        <Tabs defaultTab="1">
          <TabItem tab={<span><i className="iconfont icon-label_fill"/>推荐</span>} name="1">
            <Row gutter={40}>
              <Row.Col span={{span: 8, xs: 24}}>
                <Card
                  className="author-card"
                  icon="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  iconRound={true}
                  head={<div className="author-card-head">
                    <a href="baidu.com"><h4>简书出版1</h4></a>
                    <p>给我发简信前请先看完我的简介。如何开...</p>
                    <Button><i className="iconfont icon-add"/>关注</Button>
                  </div>}
                  bodyTitle="最近更新">
                  <div className="author-card-body">
                    <a target="_blank" href="baidu.com">最美诗歌音频</a>
                    <a target="_blank" href="baidu.com">出版社会死，出版业会长存——版权中心总裁演讲</a>
                    <a target="_blank" href="baidu.com">【职场小说·匠人精神·行业故事】征文获奖情况公布</a>
                  </div>
                </Card>
              </Row.Col>
              <Row.Col span={{span: 8, xs: 24}}>
                <Card
                  className="author-card"
                  icon="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  iconRound={true}
                  head={<div className="author-card-head">
                    <a href="baidu.com"><h4>简书出版2</h4></a>
                    <p>给我发简信前请先看完我的简介。如何开...</p>
                    <Button type="transparent"><i className="iconfont icon-add"/>关注</Button>
                  </div>}
                  bodyTitle="最近更新">
                  <div className="author-card-body">
                    <a target="_blank" href="baidu.com">最美诗歌音频</a>
                    <a target="_blank" href="baidu.com">出版社会死，出版业会长存——版权中心总裁演讲</a>
                    <a target="_blank" href="baidu.com">【职场小说·匠人精神·行业故事】征文获奖情况公布</a>
                  </div>
                </Card>
              </Row.Col>
              <Row.Col span={8} xs={24}>
                <Card
                  className="author-card"
                  icon="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  iconRound={true}
                  head={<div className="author-card-head">
                    <a href="baidu.com"><h4>简书出版3</h4></a>
                    <p>给我发简信前请先看完我的简介。如何开...</p>
                    <Button href="https://baidu.com"><i className="iconfont icon-add"/>关注</Button>
                  </div>}
                  bodyTitle="最近更新">
                  <div className="author-card-body">
                    <a target="_blank" href="baidu.com">最美诗歌音频</a>
                    <a target="_blank" href="baidu.com">出版社会死，出版业会长存——版权中心总裁演讲</a>
                    <a target="_blank" href="baidu.com">【职场小说·匠人精神·行业故事】征文获奖情况公布</a>
                  </div>
                </Card>
              </Row.Col>
            </Row>
            <Input
              value="123123"
              width="500px"
              addonBefore={<i className="iconfont icon-mine_fill"/>}
              addonAfter={<i className="iconfont icon-manage_fill"/>}
              round={true}
            />
            <br/>
            <br/>
            <Input
              value="123123"
              width="500px"
              addonBefore="before"
              round={true}
            />
            <br/>
            <br/>
            <Input
              value="123123"
              width="500px"
              addonAfter="after"
              round={true}
            />
            <br/>
            <br/>
            <Input
              value="123123"
              width="500px"
              addonBefore="before"
              preffix={<i className="iconfont icon-mine_fill"/>}
              round={true}
            />
            <br/>
            <br/>
            <Input
              value="123123"
              width="500px"
              addonAfter="after"
              preffix={<i className="iconfont icon-mine_fill"/>}
              round={true}
            />
            <br/>
            <br/>
            <Input
              width="500px"
              value={this.state.value}
              round={true}
              onChange={(value) => {this.setState({value})}}
              preffix={<i className="iconfont icon-mine_fill"/>}
              suffix={<Icon action={true} type="delete_fill"/>}
            />
            <br/>
            <br/>
            <Input
              width="500px"
              round={true}
              defaultValue="456456"
              suffix={<i className="iconfont icon-mine_fill"/>}
            />
            <br/>
            <br/>
            <Input
              width="500px"
              round={true}
              defaultValue="456456"
            />
            <br/>
          </TabItem>
          <TabItem tab={<span><i className="iconfont icon-like_fill"/>热门</span>} name="2">
            <Tabs defaultTab="2" side={true}>
              <TabItem tab={<span><i className="iconfont icon-like_fill"/>热门</span>} name="2">
                <div>2</div>
              </TabItem>
              <TabItem tab={<span><i className="iconfont icon-coordinates_fill"/>城市</span>} name="3">
                <div>3</div>
                <div>3</div>
              </TabItem>
              <TabItem tab={<span><i className="iconfont icon-shop_fill"/>校园</span>} name="4">
                4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>4<br/>
              </TabItem>
            </Tabs>
          </TabItem>
          <TabItem tab={<span><i className="iconfont icon-coordinates_fill"/>城市</span>} name="3">
            <div>3</div>
            <div><Input/></div>
          </TabItem>
          <TabItem tab={<span><i className="iconfont icon-shop_fill"/>校园</span>} name="4">
            4
          </TabItem>
        </Tabs>
      </Container>
    )
  }
}

export default Subject