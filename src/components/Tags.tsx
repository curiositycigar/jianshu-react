import * as React from 'react'
import {
  Link,
} from 'react-router-dom'
import './css/Tags.styl'

interface IData {
  image: string,
  link: string,
  name: string,
}

class Tags extends React.Component<any, any> {
  public static renderItem(data: IData, index: number) {
    return <a key={index} href={data.link} className="tag-item">
      <img src={data.image} alt={data.name}/>
      <span>{data.name}</span>
    </a>
  }

  public props: {
    data: IData[],
    more?: string,
  }

  constructor(props: {}) {
    super(props)
  }

  public render() {
    const {data, more} = this.props
    return <div className="tags">
      {data.map((item, index) => Tags.renderItem(item, index))}
      {more ? <Link className="tags-more" to={more}>查看更多专题<i className='iconfont icon-enter'/></Link> : {}}
    </div>
  }
}

export default Tags