import * as React from 'react'
import * as ReactDOM from 'react-dom';
import Button from '../src/components/Button'

export default () => {
  describe('Button', () => {
    const div = document.createElement('div')
    it('default Button', () => {
      ReactDOM.render(<Button>按钮</Button>, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })
}
