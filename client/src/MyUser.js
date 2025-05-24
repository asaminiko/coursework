import { makeAutoObservable } from 'mobx'

export default class MyUser {
  constructor() {
    const isAuthFromStorage = localStorage.getItem('isAuth') === 'true'
    const userFromStorage = JSON.parse(localStorage.getItem('user')) || {}

    this._isAuth = isAuthFromStorage
    this._user = userFromStorage

    makeAutoObservable(this)
  }
  setIsAuth(bool) {
    this._isAuth = bool
    localStorage.setItem('isAuth', bool)
  }

  setUser(user) {
    this._user = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
