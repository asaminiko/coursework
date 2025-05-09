const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')
const ApiError = require('../ApiError.js')
const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  })
} // робить токен із вказаними полями, вона використовує секрет з оточення,
// термін життя - 24 години

class UserController {
  async register(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
      //Перевіряє чи не пусто?
      return next(ApiError.badRequest('Некоректний email або password'))
    }
    const candidate = await User.findOne({ where: { email } }) //Шукає користувача з таким самим email
    if (candidate) {
      return next(ApiError.badRequest('Користувач з таким email вже існує'))
    }
    const hashPassword = await bcrypt.hash(password, 5) //хешує пароль із силою сольового раунду 5
    const user = await User.create({ email, password: hashPassword }) //Створюється користувач в БД з хешуванням в паролі

    const token = generateJwt(user.id, user.email)
    return res.json({ token })
  }

  async login(req, res, next) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } }) //Шукає по email користувача
    if (!user) {
      return next(ApiError.internal('Користувач незнайдений'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password) //Порівнює пароль зі збереженим
    if (!comparePassword) {
      return next(ApiError.internal('Хибний password'))
    }
    const token = generateJwt(user.id, user.email)
    return res.json({ token })
  }
}

module.exports = new UserController()
