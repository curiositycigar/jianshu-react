import * as React from 'react'
import Col from './Col'
import './css/Row.css'
import {cloneElement, Children} from "react";

interface IRowProps {
  children: JSX.Element[],
  gutter?: number
}

class Row extends React.Component<IRowProps, any> {
  public static Col: typeof Col

  public props: IRowProps

  constructor(props: IRowProps) {
    super(props)
  }

  public render() {
    const {children, gutter} = this.props

    const halfGutter = gutter ? gutter / 2 : 0

    const cols = Children.map(children, (col: React.ReactElement<HTMLDivElement>) => {
      if (!col) {
        return null
      }
      if (col.props && halfGutter && halfGutter > 0) {
        return cloneElement(col, {
          style: {
            paddingLeft: halfGutter,
            paddingRight: halfGutter,
            ...col.props.style,
          },
        })
      }
      return col
    })


    return <div className="row">{cols}</div>
  }
}

Row.Col = Col

export default Row