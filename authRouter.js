const Router = require('express')
const router = new Router()
const controller = require('./authController.js')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
   check('username', "Имя не может быть пустым").notEmpty(),
   check('password', "Пароль от 4 до 10 символов").isLength({min:4, max: 10})
], controller.registration)
router.post('/login', controller.registration)
router.get('/users', roleMiddleware(['USER']) ,controller.getUser)

module.exports = router