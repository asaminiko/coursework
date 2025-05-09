const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todoController.js')
const authMiddleware = require('../middleware/authMiddleware.js')
//authMiddleware - робить перевірку, що користувач автентифікований.
router.post('/create', authMiddleware, todoController.create)
router.get('/getAll', authMiddleware, todoController.getAll)
router.get('/:id', authMiddleware, todoController.getOne)
router.delete('/delete/:id', authMiddleware, todoController.deleteTask)
router.put('/update/:id', authMiddleware, todoController.updateTask)
module.exports = router
