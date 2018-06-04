import * as React from 'react'
import * as classNames from 'classnames'
import './css/Button.styl'
import {CSSProperties} from "react";

interface IButtonProps {
  children: string | JSX.Element | Array<JSX.Element | string>
  onClick?: (e: Event) => void,
  type?: 'primary' | 'dark' | 'light' | 'transparent',
  style?: CSSProperties,
  href?: string,
  disabled?: boolean,
}

class Button extends React.Component<IButtonProps, any> {
  public static defaultProps = {
    disabled: false,
    type: 'primary',
  }

  public props: IButtonProps

  constructor(props: IButtonProps) {
    super(props)
  }

  public handleClick = (e: any, disabled?: boolean) => {
    const {onClick} = this.props

    if (onClick && !disabled) {
      onClick(e)
    }
  }

  public render() {
    const {
      type,
      style,
      href,
      disabled,
    } = this.props

    return (
      href ?
        <a
          style={style}
          className={classNames(['btn', 'btn-' + type, {disabled}])}
          href={disabled ? undefined :href}
          onClick={(e) => {
            this.handleClick(e)
          }}>{this.props.children}
        </a>
        :
        <button
          style={style}
          disabled={disabled}
          className={classNames(['btn', 'btn-' + type])}
          onClick={(e) => {
            this.handleClick(e, disabled)
          }}>{this.props.children}
        </button>
    )
  }
}

export default Button