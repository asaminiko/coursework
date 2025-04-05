const { Todo } = require('../models/models.js')
const ApiError = require('../ApiError.js')
class TodoController {
  async create(req, res, next) {
    try {
      const { title, text } = req.body
      const userId = req.user.id

      if (!title || !text) {
        return next(ApiError.badRequest('Поле title і text обовʼязкові'))
      }

      const todo = await Todo.create({
        title,
        text,
        userId,
      })

      return res.json(todo)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res, next) {
    try {
      const userId = req.user.id
      let allTodos
      if (userId) {
        allTodos = await Todo.findAndCountAll({ where: { userId } })
      }
      if (!userId) {
        return next(ApiError.badRequest('Ви не увійшли'))
      }
      return res.json(allTodos)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getOne(req, res) {
    const userId = req.user.id
    if (!userId) {
      return next(ApiError.badRequest('Ви не увійшли'))
    }
    const { id } = req.params
    const todo = await Todo.findOne({
      where: { id, userId },
    })
    return res.json(todo)
  }
}

module.exports = new TodoController()
