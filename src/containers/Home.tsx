/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'
import Container from './Container'
import NoteList from '../components/NoteList'
// import classNames = require('classnames')
// import {omit} from 'lodash'

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    const data = [
      {
        author: 'Cigar',
        comments: 4,
        content: 'content',
        like: 13,
        link: 'http://baidu.com',
        name: 'name',
        reword: 1,
      },
    ]
    return (
      <Container>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <NoteList data={data}/>
      </Container>
    )
  }
}

export default Home