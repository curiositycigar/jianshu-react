/**
 * Created by YOU on 2018/6/4.
 */
import * as React from 'react'
// import * as propTypes from 'prop-types'
import * as classNames from 'classnames'
// import {omit} from 'lodash'

import './css/Card.styl'

interface IProps {
  children?: JSX.Element | JSX.Element[],
  className?: string,
  bodyTitle?: string | JSX.Element,
  head?: string | JSX.Element | JSX.Element[],
  icon?: string,
  iconRound?: boolean,
  width?: string
}

class Card extends React.Component<IProps, any> {
  public static defaultProps = {
    iconRound: false,
    width: '100%',
  }

  constructor (props: IProps) {
    super(props)
  }

  public render () {
    const {
      bodyTitle,
      children,
      className,
      head,
      icon,
      iconRound,
      width,
    } = this.props

    return (
      <div className={classNames(['card', className])} style={{width}}>
        {icon ? <img className={classNames(['card-iconImg', {circle: iconRound}])} src={icon} alt="icon"/> : ''}
        {head}
        <div className="card-hr">
          {bodyTitle ? <span className="card-body-title">{bodyTitle}</span> : ''}<span className="hr"/>
        </div>
        {children}
      </div>
    )
  }
}

export default Card