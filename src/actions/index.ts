/**
 * Created by YOU on 2018/4/27.
 */

/* example----------- */
/*

 type: string,
 payload: any,
 error: Error | any
 mate: any

 */

import {
  ADD_TODO,
} from '../constants'

type IAddTodo = (text: string) => {
  payload: {
    id: number,
    text: string,
  },
  type: string,
}

let nextTodoId: number = 0

export const addTodo: IAddTodo = (text) => {
  return {
    payload: {
      id: nextTodoId++,
      text,
    },
    type: ADD_TODO,
  }
}
/* ------------example */