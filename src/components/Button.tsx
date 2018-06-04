import * as React from 'react'
import * as classNames from 'classnames'
import './css/Button.styl'
import {CSSProperties} from "react";

interface IButtonProps {
  children: string | JSX.Element | Array<JSX.Element | string>
  onClick?: () => void,
  type?: 'primary' | 'dark' | 'light',
  style?: CSSProperties,
}

class Button extends React.Component<IButtonProps, any> {
  public static defaultProps = {
    type: 'primary'
  }

  public props: IButtonProps

  constructor (props: IButtonProps) {
    super(props)
  }

  public render () {
    const {type, style} = this.props

    return <button style={style} className={classNames(['btn', 'btn-' + type])}
                   onClick={this.props.onClick}>{this.props.children}</button>
  }
}

export default Button