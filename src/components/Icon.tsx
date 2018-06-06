/**
 * Created by YOU on 2018/6/6.
 */
import * as React from 'react'
import * as classNames from 'classnames'
import './css/Icon.styl'
// import {omit} from 'lodash'

interface IProps {
  action?: boolean,
  type: string,
  onClick?: (e: any) => void,
}

class Icon extends React.Component<IProps, any> {
  public props: IProps

  constructor (props: IProps) {
    super(props)
  }

  public render () {
    const {type, onClick, action} = this.props
    return (
      <i className={classNames(['iconfont', 'icon-' + type, {
        'iconfont-action': action
      }])} onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
      }}/>
    )
  }
}

export default Icon