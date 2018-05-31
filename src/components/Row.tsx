import * as React from 'react'
import Col from './Col'
import './css/Row.css'

class Row extends React.Component {
  public static Col: typeof Col

  constructor(props: {}) {
    super(props)
  }

  public render() {
    return <div className="row">{this.props.children}</div>
  }
}

Row.Col = Col

export default Row