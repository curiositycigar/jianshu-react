import * as React from 'react'

interface IProps {
  children: typeof React.Component
}

class Tabs extends React.Component<IProps, any> {
  public static TabItem(name: string | number, children: string | typeof React.Component | HTMLElement) {
    return (<li className="tab">
      {children}
    </li>)
  }

  public props: IProps

  public state = {
    currentTab: null
  }

  constructor(props: IProps) {
    super(props)
  }

  // 记录状态

  public render() {
    const {children} = this.props

    return (<ul className="tabs">
      {children}
    </ul>)
  }
}

export default Tabs