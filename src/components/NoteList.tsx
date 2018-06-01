/**
 * Created by YOU on 2018/5/31.
 */
import * as React from 'react'
import './css/NoteList.css'
// import * as classNames from 'classnames'
// import {omit} from 'lodash'

interface IItem {
  title: string,
  content: string,
  link: string,
  author: string,
  comments: number,
  like: number,
  reword: number,
  image?: string,
}

class NoteList extends React.Component<any, any> {
  public static renderItem (data: IItem, key: number) {
    return (<li key={key} className="note-item">
      <div className="note-item-content">
        <a className="note-title" href={data.link}>{data.title}</a>
        <p>{data.content}</p>
        <div className="note-meta">
          <a href={data.link + '#/comment'}><i className="iconfont icon-message_fill"/>{data.comments}</a>
          <span><i className="iconfont icon-like_fill"/>{data.like}</span>
          <span><i className="iconfont icon-redpacket_fill"/>{data.reword}</span>
        </div>
      </div>
      <a className="imageWrapper" href={data.link}><img src={data.image} /></a>
    </li>)
  }

  public props: {
    data: IItem[]
  }

  constructor (props: {}) {
    super(props)
  }

  public render () {
    const {data} = this.props

    return (
      <ul className="note-list">
        {data.map((item, index) => NoteList.renderItem(item, index))}
      </ul>
    )
  }
}

export default NoteList