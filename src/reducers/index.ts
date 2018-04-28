/**
 * Created by YOU on 2018/4/27.
 */
const initData = {}

import {
  LOGIN,
  UPDATE_PASSWORD,
} from '../constants'

export default function (state = initData, action: {type: string, data: any}): any {
  switch (action.type) {
    case LOGIN:
      return action.data
    case UPDATE_PASSWORD:
      return action.data
    default:
      return state
  }
}