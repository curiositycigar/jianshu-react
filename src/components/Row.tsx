import * as React from 'react'
import Col from './Col'
import './css/Row.css'

interface IRowProps{
  children?: JSX.Element | string | Array<JSX.Element | string>
}

class Row extends React.Component<IRowProps, any> {
  public static Col: typeof Col

  public props: IRowProps

  constructor(props: IRowProps) {
    super(props)
  }

  public render() {
    return <div className="row">{this.props.children}</div>
  }
}

Row.Col = Col

export default Row