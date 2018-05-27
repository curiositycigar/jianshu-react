import * as React from 'react'

class Button extends React.Component {
  public props: any

  constructor(props: any) {
    super(props)
  }

  public render() {
    return <button onClick={this.props.onClick}>{this.props.value}</button>
  }
}

export default Button