/**
 * Created by YOU on 2018/6/4.
 */
import * as React from 'react'

interface IProps{
  children: JSX.Element | JSX.Element[] | string,
  name?: string,
  tab: string | JSX.Element,
}

class TabItem extends React.Component<IProps, any> {
  public state: IProps

  constructor (props: IProps) {
    super(props)

    this.setState(this.props)
  }

  public render () {
    return (<div/>)
  }
}

export default TabItem
