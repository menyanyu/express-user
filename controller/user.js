const { use } = require('express/lib/application')
const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

//用户注册
exports.register = async (req, res, next) => {
    try {
        let user = new User(req.body)
        // //保存到数据库
        await user.save()
        user = user.toJSON()
        delete user.password
        // //发送成功响应
        res.status(201).json({ user })
    } catch (error) {
        next(error)
    }
    
}



//用户登录
exports.login = async (req, res, next) => {
    try {
        // 1.数据验证
        // 2.生成token
        const user = req.user.toJSON()
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret, { expiresIn: "1d" })//过期时间1天
        // 3.发送成功响应（包含 token 的用户信息）
        delete user.password
        res.status(200).json({
            ...user,
            token
        })
    } catch (err) {
        next(err)
    }
}

//获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
    try {
        res.status(200).json({
            user: req.user
        })
    } catch (err) {
        next(err)
    }
}
