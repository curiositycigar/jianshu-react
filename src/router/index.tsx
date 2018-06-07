/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'

const {Provider, Consumer} = React.createContext<{name: string, level: number}>({
  name: '123',
  level: 1,
})

export {Provider, Consumer}