import * as React from 'react'

interface IData {
  name: string,
  link: string,
  avatar: string,
  words: number,
  like: number,
}

class AuthorList extends React.Component {
  public static renderItem(data: IData) {
    return (<li>
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
    return <ul>{data.map(item => AuthorList.renderItem(item))}</ul>
  }
}

export default AuthorList