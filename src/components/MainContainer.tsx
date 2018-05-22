/*
 create by YOU at 2018/5/8
 */
import * as React  from 'react'

interface IProps {
  children: any
}

export default class MainContainer extends React.Component {
  public props: IProps

  constructor (props: any) {
    super(props)
  }

  public render () {
    console.log(this.props)
    return (<div>
      {this.props.children}
    </div>)
  }
}