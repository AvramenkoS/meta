const {Router} = require('express')
const bcrypt = require('bcryptjs') // хеш пароля
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator') // валидация полей
const User = require('../models/User') // схема пользователя
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('name', 'Некорректное имя').isLength({min: 2}),
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длинна пароля 6 символов').isLength({min: 6})
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req) // валидация входящих полей

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные 2'
                })
            }

            const {email, password, name} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: 'Пользователь существует'})
            }

            const hashedPassword = await bcrypt.hash(password, 12) // шифруем пароль
            const user = new User({email: email, password: hashedPassword, name: name}) // создаем пользователя
            await user.save() // сохраняем пользователя

            res.status(201).json({status: 200, message: 'Пользователь создан'}) // успешно сохранили

        } catch (e) {
            res.status(500).json({message: 'Error'})
        }
    })

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Минимальная длинна пароля 6 символов').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req) // валидация входящих полей

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'Такого пользователя не существует'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'} // рекомендовано 1 час
            )

            res.json({token: token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Error'})
        }
    })

module.exports = router