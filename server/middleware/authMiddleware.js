const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    //Береться токен з заголовка
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Неавторизований' })
    }
    //Токен перевіряється завдяки секретному ключу
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded //має дані від токена
    next()
  } catch (e) {
    res.status(401).json({ message: 'Неавторизований' })
  }
}
