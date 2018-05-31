import * as React from 'react'

interface IProps {
  span: number,
  offset?: number,
  children?: any,
}

class Col extends React.Component {
  public static defaultProps = {
    offset: 0
  }

  public props: IProps

  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const {
      span,
      offset,
    } = this.props

    const marginLeft = offset ? offset * 100 / 24 + '%' : 0

    if (span <= 0 || span > 24) {
      throw new Error('The number of span prop must between 1 and 24!')
    }

    return <div className='span'
                style={{
                  marginLeft,
                  width: span * 100 / 24 + '%',
                }}>{this.props.children}</div>
  }
}

export default Col