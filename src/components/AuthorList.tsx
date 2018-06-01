import * as React from 'react'
import './css/AuthorList.styl'

interface IData {
  avatar: string,
  like: number,
  link: string,
  name: string,
  words: number,
}

interface IProps {
  data: IData[],
  onRefresh?: () => void,
  more?: string
}

class AuthorList extends React.Component<any, any> {
  public static renderItem(data: IData, key: number) {
    return (<li key={key} className="author-item">
      <a href={data.link}>
        <img src={data.avatar} alt={data.name}/>
      </a>
      <div className="author-item-content">
        <a href={data.link}>{data.name}</a>
        <span>写了{data.words}字·收获{data.like}喜欢</span>
      </div>
      <div className="author-item-buttons">
        <a href="javascript:;"><i className="iconfont icon-add"/>关注</a>
      </div>
    </li>)
  }

  public props: IProps

  constructor(props: {}) {
    super(props)
  }

  public render() {
    const {
      data,
      more,
      onRefresh,
    } = this.props
    return <div>
      {onRefresh ?
        (<div className="author-list-header">
          <span>推荐作者</span><a onClick={onRefresh} href="javascript:;"><i className="iconfont icon-refresh"/>换一批</a>
        </div>) : {}}
      <ul className="author-list">{data.map((item, index) => AuthorList.renderItem(item, index))}</ul>
      {more ? <a className="author-list-more" href={more}>查看全部<i className="iconfont icon-enter"/></a> : {}}
    </div>
  }
}

export default AuthorList