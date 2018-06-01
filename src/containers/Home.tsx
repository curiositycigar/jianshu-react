/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'
import Row from '../components/Row'
import Container from './Container'
import NoteList from '../components/NoteList'
import AuthorList from '../components/AuthorList'
// import classNames = require('classnames')
// import {omit} from 'lodash'

class Home extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
  }

  public render () {
    const avatarUrl = 'https://upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
    const data = [
      {
        author: 'Cigar',
        comments: 4,
        content: '越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到,越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到。',
        image: 'https://upload-images.jianshu.io/upload_images/3459828-534caedceb295f8b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        like: 13,
        link: 'http://baidu.com',
        reword: 1,
        title: '越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到',
      },
      {
        author: 'Cigar',
        comments: 4,
        content: '越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到。',
        image: 'https://upload-images.jianshu.io/upload_images/3459828-534caedceb295f8b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        like: 13,
        link: 'http://baidu.com',
        reword: 1,
        title: '越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到',
      },
      {
        author: 'Cigar',
        comments: 4,
        content: '越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到,越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到。',
        image: 'https://upload-images.jianshu.io/upload_images/3459828-534caedceb295f8b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        like: 13,
        link: 'http://baidu.com',
        reword: 1,
        title: '越来越多的内容产品或社区在运用内容算法推荐系统，想让你的文章和内容被更多人看到',
      },
    ]
    const authors = [
      {
        avatar: avatarUrl,
        like: 534,
        link: 'https://baidu.com',
        name: '渣渣辉',
        words: 23145,
      },
      {
        avatar: avatarUrl,
        like: 534,
        link: 'https://baidu.com',
        name: '渣渣辉',
        words: 23145,
      },
      {
        avatar: avatarUrl,
        like: 534,
        link: 'https://baidu.com',
        name: '渣渣辉',
        words: 23145,
      },
    ]
    return (
      <Container>
        <Row>
          <Row.Col span={16}>
            <NoteList data={data}/>
          </Row.Col>
          <Row.Col span={7} offset={1}>
            <AuthorList data={authors}/>
          </Row.Col>
        </Row>
      </Container>
    )
  }
}

export default Home