import * as React from 'react'
import * as classNames from 'classnames'
import './css/Input.styl'

interface IProps {
  type?: 'text' | 'password',
  name?: string,
  id?: string,
  className?: string,
  placeholder?: string,
}

class Input extends React.Component<IProps, any> {
  public static defaultProps = {
    type: 'text'
  }

  public props: IProps

  constructor(props: IProps) {
    super(props)
  }

  public render() {
    const {
      className,
      ...otherProps
    } = this.props

    return (<input
      {...otherProps}
      className={classNames(['input', className])}
    />)
  }
}

export default Input