const { Todo } = require('../models/models.js')
const ApiError = require('../ApiError.js')
class TodoController {
  async create(req, res, next) {
    try {
      const { text, priority } = req.body
      const userId = req.user.id
      if (!userId) {
        return next(ApiError.badRequest('Ви не увійшли'))
      }
      const date = Date.now()
      if (!text) {
        return next(ApiError.badRequest('Поле text обовʼязкове'))
      }

      const todo = await Todo.create({
        priority,
        text,
        userId,
        date,
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

  async deleteTask(req, res) {
    const userId = req.user.id
    if (!userId) {
      return next(ApiError.badRequest('Ви не увійшли'))
    }
    const { id } = req.params
    const todo = await Todo.destroy({
      where: { id, userId },
    })
    return res.json(todo)
  }
  async updateTask(req, res, next) {
    try {
      const { id } = req.params
      const { text, priority } = req.body
      const userId = req.user.id
      if (!userId) {
        return next(ApiError.badRequest('Ви не увійшли'))
      }
      if (!priority || !text) {
        return next(ApiError.badRequest('Поле priority і text обовʼязкові'))
      }

      const todo = await Todo.update(
        { text, priority },
        {
          where: {
            id,
            userId,
          },
        }
      )
      return res.json(id)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new TodoController()
