/**
 * Created by YOU on 2018/6/8.
 */
import * as React from 'react'
// import * as propTypes from 'prop-types'
import * as classNames from 'classnames'
// import {omit} from 'lodash'

interface IProps {
  children: JSX.Element[],
  direction?: 'row' | 'col',
}

class InputGroup extends React.Component<IProps, any> {
  public static defaultProps = {
    direction: 'row'
  }

  public props: IProps

  constructor (props: IProps) {
    super(props)
  }

  public render () {
    const {children, direction} = this.props
    return (
      <span className={
        classNames(['input-group', `input-group-${direction}`])
      }>
        {children}
      </span>
    )
  }
}

export default InputGroup