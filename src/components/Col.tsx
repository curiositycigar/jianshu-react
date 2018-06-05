import * as React from 'react'
import * as classNames from 'classnames'
import {CSSProperties} from "react";

/*

xs <576
sm ≥576
md ≥768
lg ≥992
xl ≥1200
xxl ≥1600

 */

interface IProps {
  span: number | {
    span: number,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    xxl?: number,
  },
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
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
      offset,
      style,
    } = this.props

    let {
      span,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
    } = this.props

    if (typeof span !== 'number') {
      xs = xs || span.xs
      sm = sm || span.sm
      md = md || span.md
      lg = lg || span.lg
      xl = xl || span.xl
      xxl = xxl || span.xxl
      span = span.span
    }

    const marginLeft = offset ? offset * 100 / 24 + '%' : 0

    if (span <= 0 || span > 24) {
      throw new Error('The number of span prop must between 1 and 24!')
    }

    return <div
      className={classNames(
        [
          'span',
          'span-' + span,
          {
            [`span-xs-${xs}`]: xs !== undefined && xs > 0,
            [`span-sm-${sm}`]: sm !== undefined && sm > 0,
            [`span-md-${md}`]: md !== undefined && md > 0,
            [`span-lg-${lg}`]: lg !== undefined && lg > 0,
            [`span-xl-${xl}`]: xl !== undefined && xl > 0,
            [`span-xxl-${xxl}`]: xxl !== undefined && xxl > 0,
          }
        ]
      )}
      style={{
        marginLeft,
        ...style,
      }}>{this.props.children}</div>
  }
}

export default Col