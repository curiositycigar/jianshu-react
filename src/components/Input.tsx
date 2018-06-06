import * as React from 'react'
import * as classNames from 'classnames'
import './css/Input.styl'

type IAddOn = JSX.Element | string

interface IProps {
  width?: string | number,
  value?: string,
  defaultValue?: string,
  addonBefore?: IAddOn,
  addonAfter?: IAddOn,
  className?: string,
  disabled?: boolean,
  id?: string,
  name?: string,
  onChange?: (val: string) => void,
  placeholder?: string,
  preffix?: IAddOn,
  suffix?: IAddOn,
  type?: 'text' | 'password',
  round?: boolean,
}

class Input extends React.Component<IProps, any> {
  public static defaultProps = {
    disabled: false,
    round: false,
    type: 'text',
    width: '100%',
  }

  public static renderInput (props: IProps) {
    const {
      className,
      onChange,
      round,
      width,
      ...otherProps
    } = props
    return (
      <input
        style={{
          width
        }}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value)
          }
        }}
        {...otherProps}
        className={classNames(['input', {
          round,
        }, className])}
      />)
  }

  public static renderInputWidthFix (props: IProps) {
    const {
      disabled,
    } = props

    const {
      preffix,
      suffix,
      width,
      ...otherProps,
    } = props

    return (
      <span
        className={classNames(["input-affix-wrapper", {
          'input-affix-disabled': disabled,
        }])}
        style={{
          width
        }}
      >
        {preffix ? <span className="input-affix input-prefix">{preffix}</span> : null}
        {suffix ? <span className="input-affix input-suffix">{suffix}</span> : null}
        {Input.renderInput(otherProps)}
      </span>
    )
  }

  public static renderInputWidthAddon (props: IProps) {
    const {
      preffix,
      suffix,
      disabled,
    } = props
    const {
      addonBefore,
      addonAfter,
      round,
      width,
      ...otherProps,
    } = props

    const hasFix = preffix || suffix

    return (
      <span
        className={classNames(["input-wrapper", {
          'input-wrapper-disabled': disabled,
        }, {
          round,
        }])}
        style={{
          width
        }}
      >
        {addonBefore ? <span className="input-addon input-addon-before">{addonBefore}</span> : null}
        {hasFix ? Input.renderInputWidthFix(otherProps) : Input.renderInput(otherProps)}
        {addonAfter ? <span className="input-addon input-addon-after">{addonAfter}</span> : null}
      </span>
    )
  }

  public props: IProps

  constructor (props: IProps) {
    super(props)
  }

  public render () {
    const {
      preffix,
      suffix,
      addonBefore,
      addonAfter,
    } = this.props

    const hasAddon = addonBefore || addonAfter
    const hasFix = preffix || suffix

    if (hasAddon) {
      return Input.renderInputWidthAddon(this.props)
    } else if (hasFix) {
      return Input.renderInputWidthFix(this.props)
    } else {
      return Input.renderInput(this.props)
    }
  }
}

export default Input