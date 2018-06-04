import * as React from 'react'
import * as classNames from 'classnames'
import '../css/Tabs.styl'

interface IProps {
  children: JSX.Element[],
  defaultTab?: string | number,
  onTabClick?: (name: string | number) => void
}

class Tabs extends React.Component<IProps, any> {
  public props: IProps

  public state: {
    currentTab: string | number
  } = {
    currentTab: 0
  }

  constructor (props: IProps) {
    super(props)
    const {defaultTab, children} = this.props
    this.state.currentTab = defaultTab || children[0].props.name || 0
  }

  public handleTabClick = (name: string | number, item: JSX.Element, e: any) => {
    this.setState({
      currentTab: name
    })

    const {onTabClick} = this.props

    if (onTabClick) {
      onTabClick(name)
    }
  }

  public render () {
    const {children} = this.props
    const {currentTab} = this.state

    return (<div className="tabs">
      <ul className="tabs-nav">
        {children.map((item, index) => (<li
          onClick={(e) => this.handleTabClick(item.props.name || index, item, e)}
          className={classNames(['tabs-nav-item', {'active': index === currentTab || item.props.name === currentTab}])}
          key={index}>
          {item.props.tab}
        </li>))}
      </ul>
      <div className="tabs-panels">
        {children.map((item, index) => (<div
          className={classNames(['tabs-panels-item', {'active': index === currentTab || item.props.name === currentTab}])}
          key={index}>
          {item.props.children}
        </div>))}
      </div>
    </div>)
  }
}

export default Tabs