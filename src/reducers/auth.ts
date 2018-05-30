/**
 * Created by YOU on 2018/5/30.
 */
const initData = {
  login: false,
}

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from '../constants'

export default function (state = initData, action: {type: string, payload: any}): any {
  switch (action.type) {
    case SIGN_IN:
      return action.payload
    case SIGN_OUT:
      return action.payload
    case SIGN_UP:
      return action.payload
    default:
      return state
  }
}