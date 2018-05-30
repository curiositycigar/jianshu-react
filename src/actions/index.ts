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
  SIGN_IN,
  SIGN_OUT,
} from '../constants'

// class CustomPromise<FUN, DATA> extends Promise {
//   private initData: any
//
//   constructor(fun: FUN, initData: DATA) {
//     console.log(fun)
//     super(fun)
//     this.initData = initData
//   }
//
//   public init(fun: any) {
//     fun(this.initData || true)
//     return this
//   }
// }

interface ISignIn {
  payload: {
    login: boolean,
    data: {
      name: string,
    }
  },
  type: string,
}

export const signIn = (name: string, password: string): ISignIn => {
  return {
    payload: {
      data: {
        name,
      },
      login: true,
    },
    type: SIGN_IN,
  }
}

export const signOut = () => {
  return {
    payload: {
      login: false,
    },
    type: SIGN_OUT,
  }
}
/* ------------example */