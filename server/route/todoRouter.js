const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todoController.js')
const authMiddleware = require('../middleware/authMiddleware.js')
router.post('/create', authMiddleware, todoController.create)
router.get('/getAll', authMiddleware, todoController.getAll)
router.get('/:id', authMiddleware, todoController.getOne)
module.exports = router
