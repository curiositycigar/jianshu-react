import * as React from 'react'

class Article extends React.Component {
  public props: any

  constructor(props: any) {
    super(props)
  }

  public render() {
    console.log(this.props)
    return (
      <div>
        <p>this is article</p>
        <p>this is article</p>
        <p>this is article</p>
        <p>{this.props.match.params.id}</p>
      </div>
    )
  }
}

export default Article