import * as React from 'react'
import * as classNames from 'classnames'
import {CSSProperties} from "react";

interface IProps {
  span: number,
  offset?: number,
  children?: any,
  style?: CSSProperties,
}

class Col extends React.Component {
  public static defaultProps = {
    offset: 0,
    padding: 0,
  }

  public props: IProps

  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const {
      span,
      offset,
      style,
    } = this.props

    const marginLeft = offset ? offset * 100 / 24 + '%' : 0

    if (span <= 0 || span > 24) {
      throw new Error('The number of span prop must between 1 and 24!')
    }

    return <div className={classNames(['span', 'span-' + span])}
                style={{
                  marginLeft,
                  ...style,
                }}>{this.props.children}</div>
  }
}

export default Col