import { makeAutoObservable } from 'mobx'

export default class MyTodo {
  constructor() {
    this._todo = [
      {
        id: 1,
        text: 'fdfdfdfgdfgdfg',
        priority: 2,
        date: '2025-02-13',
      },
      {
        id: 2,
        text: 'fdfdfdssfgdfgdfg',
        priority: 3,
        date: '2025-04-12',
      },
      {
        id: 3,
        text: 'fdfdfdfgddddfgdfg',
        priority: 1,
        date: '2025-04-11',
      },
      {
        id: 4,
        text: 'fdfdfdfgasdsfgdfg',
        priority: 5,
        date: '2025-04-10',
      },
    ]
    makeAutoObservable(this)
  }

  setPriority(todo) {
    this._todo = todo
  }

  get todo() {
    return this._todo
  }
}
