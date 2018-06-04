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
// import * as propTypes from 'prop-types'
// import * as classNames from 'classnames'
// import {omit} from 'lodash'

class Subject extends React.Component<{}, any> {
  constructor (props: {}) {
    super(props)
  }

  public render () {

    return (
      <Container>
        <Tabs defaultTab="1">
          <TabItem tab={<span><i className="iconfont icon-label_fill"/>推荐</span>} name="1">
            <Row>
              <Row.Col span={8}>
                <Card
                  icon="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  head={<div>
                    <a href="baidu.com"><h4>简书出版</h4></a>
                    <p style={{padding: '5px 20px'}}>给我发简信前请先看完我的简介。如何开...</p>
                    <Button><i className="iconfont icon-add"/>关注</Button>
                  </div>}
                  bodyTitle="最近更新">
                  <div style={{width: '100%', textAlign: 'left'}}>
                    <a target="_blank" href="baidu.com">最美诗歌音频 | 想把诗念给你听 征文活动开启~</a>
                    <a target="_blank" href="baidu.com">出版社会死，出版业会长存——版权中心总裁演讲</a>
                    <a target="_blank" href="baidu.com">【职场小说·匠人精神·行业故事】征文获奖情况公布</a>
                  </div>
                </Card>
              </Row.Col>
              <Row.Col span={8}>
                <Card
                  icon="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  head={<div>
                    <a href="baidu.com"><h4>简书出版</h4></a>
                    <p style={{padding: '5px 20px'}}>给我发简信前请先看完我的简介。如何开...</p>
                    <Button><i className="iconfont icon-add"/>关注</Button>
                  </div>}
                  bodyTitle="最近更新">
                  <div style={{width: '100%', textAlign: 'left'}}>
                    <a target="_blank" href="baidu.com">最美诗歌音频 | 想把诗念给你听 征文活动开启~</a>
                    <a target="_blank" href="baidu.com">出版社会死，出版业会长存——版权中心总裁演讲</a>
                    <a target="_blank" href="baidu.com">【职场小说·匠人精神·行业故事】征文获奖情况公布</a>
                  </div>
                </Card>
              </Row.Col>
              <Row.Col span={8}>
                <Card
                  icon="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  head={<div>
                    <a href="baidu.com"><h4>简书出版</h4></a>
                    <p style={{padding: '5px 20px'}}>给我发简信前请先看完我的简介。如何开...</p>
                    <Button><i className="iconfont icon-add"/>关注</Button>
                  </div>}
                  bodyTitle="最近更新">
                  <div style={{width: '100%', textAlign: 'left'}}>
                    <a target="_blank" href="baidu.com">最美诗歌音频 | 想把诗念给你听 征文活动开启~</a>
                    <a target="_blank" href="baidu.com">出版社会死，出版业会长存——版权中心总裁演讲</a>
                    <a target="_blank" href="baidu.com">【职场小说·匠人精神·行业故事】征文获奖情况公布</a>
                  </div>
                </Card>
              </Row.Col>
            </Row>
          </TabItem>
          <TabItem tab={<span><i className="iconfont icon-like_fill"/>热门</span>} name="2">
            <div>2</div>
          </TabItem>
          <TabItem tab={<span><i className="iconfont icon-coordinates_fill"/>城市</span>} name="3">
            <div>3</div>
            <div>3</div>
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