import * as React from 'react'

interface ITypes {
  deg: string,
  PI: string
}

interface IData {
  value: number,
  type: keyof ITypes
}

class Test extends React.Component<any, any>{
  private types: ITypes = {
    deg: 'deg',
    PI: 'PI'
  }

  constructor(props: any) {
    super(props)
    this.state = {
      data: {
        value: 180,
        type: this.types.deg
      }
    }
  }

  public handleChange = (e: any) => {
    const { name, value } = e.target
    this.setState({
      data: {
        value,
        type: name
      }
    })
  }

  public convert(data: IData) {
    if (data.type === this.types.deg) {
      return data.value * Math.PI / 180
    } else {
      return data.value * 180 / Math.PI
    }
  }
  public render() {
    const data = this.state.data
    const { value, type } = data
    const { deg, PI } = this.types
    const degValue = type === deg ? value : this.convert(data)
    const PIValue = type === PI ? value : this.convert(data)
    console.log(degValue, PIValue)
    return (<>
      deg: <input type="text" name={deg} value={degValue} onChange={this.handleChange} /><br />
      PI: <input type="text" name={PI} value={PIValue} onChange={this.handleChange} />
    </>)
  }
}

export default Test