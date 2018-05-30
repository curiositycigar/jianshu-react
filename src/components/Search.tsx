import * as React from 'react'
import './css/Search.css'
import * as classNames from 'classnames'

interface IProps {
  disabled?: boolean,
  placeHolder?: string,
  className?: string[] | string
}

interface IState {
  value: string
}

class Search extends React.Component {
  public static defaultProps = {
    disabled: false,
    placeHolder: '搜索',
  }

  public props: IProps

  public state: IState = {
    value: ''
  }

  constructor(props: IProps) {
    super(props)
  }

  public handleChange = (e: any) => {
    this.setState({value: e.target.value})
  }

  public render() {
    const {
      disabled,
      placeHolder,
    } = this.props
    return (<span className="search-wrapper">
      <input
        className={classNames('search-input', this.props.className)}
        type="text"
        placeholder={placeHolder}
        disabled={disabled}
        value={this.state.value}
        onChange={this.handleChange}/>
      <i className="icon icon-search search-icon"/>
        </span>)
  }
}

export default Search