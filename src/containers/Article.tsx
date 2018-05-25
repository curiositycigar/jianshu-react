import * as React from 'react'

class Article extends React.Component {
  constructor(props: any) {
    super(props)
  }

  public render() {
    console.log(this.props)
    return <div>article</div>
  }
}

export default Article