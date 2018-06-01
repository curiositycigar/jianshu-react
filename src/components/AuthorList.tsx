import * as React from 'react'
import './css/AuthorList.styl'

interface IData {
  avatar: string,
  like: number,
  link: string,
  name: string,
  words: number,
}

class AuthorList extends React.Component<any, any> {
  public static renderItem(data: IData, key: number) {
    return (<li key={key} className="author-item">
      <a href={data.link}>
        <img src={data.avatar} alt={data.name}/>
      </a>
      <div>
        <a href={data.link}>{data.name}</a>
        <span>写了{data.words}字·收获{data.like}喜欢</span>
      </div>
    </li>)
  }

  public props: {
    data: IData[]
  }

  constructor(props: {}) {
    super(props)
  }

  public render() {
    const {data} = this.props
    return <ul className="author-list">{data.map((item, index) => AuthorList.renderItem(item, index))}</ul>
  }
}

export default AuthorList