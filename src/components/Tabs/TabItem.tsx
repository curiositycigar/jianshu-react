/**
 * Created by YOU on 2018/6/4.
 */
import * as React from 'react'

type ChildElements = JSX.Element | Array<JSX.Element | string> | string

interface IProps{
  children: ChildElements
  name?: string,
  tab: ChildElements,
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
