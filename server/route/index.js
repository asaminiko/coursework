const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const todoRouter = require('./todoRouter.js')
router.use('/user', userRouter)
router.use('/todo', todoRouter)
module.exports = router
