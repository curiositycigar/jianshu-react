import * as React from 'react'
import Container from './Container'

class Article extends React.Component {
  public props: any

  constructor(props: any) {
    super(props)
  }

  public render() {
    console.log(this.props)
    return (
      <Container>
        <p>this is article</p>
        <p>this is article</p>
        <p>this is article</p>
        <p>{this.props.match.params.id}</p>
      </Container>
    )
  }
}

export default Article