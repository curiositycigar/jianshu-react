/**
 * Created by YOU on 2018/4/28.
 */

import {
  combineReducers,
  createStore,
} from 'redux'

// constants
const ADD = 'ADD'
const MULTIPLY = 'MULTIPLY'
// actions
interface ICompute {
  type: string,
  payload: {
    num: number
  }
}

function Add (num: number): ICompute {
  return {
    payload: {
      num,
    },
    type: ADD,
  }
}
function Multiply (num: number): ICompute {
  return {
    payload: {
      num
    },
    type: MULTIPLY,
  }
}
// reducers
function setNumber (state = 1, action: ICompute) {
  switch (action.type) {
    case ADD:
      return state + action.payload.num
    case MULTIPLY:
      return state * action.payload.num
    default:
      return state
  }
}

// store

interface IStore {
  dispatch: (action: ICompute) => any,
  subscribe: (cb: () => void) => void,
  getState: () => any,
}

const reducers = combineReducers({setNumber})
const store: IStore = createStore(reducers)


export default function init() {
  store.subscribe(() => {
    console.log(store.getState())
  })

  store.dispatch(Add(1))
  store.dispatch(Multiply(2))
}