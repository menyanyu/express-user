const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    //1. 从请求头获取token 数据
    let token = req.headers['authorization']
    console.log(token)
    token = token
        ? token.split('Bearer ')[1]
        : null

    //2. 验证token是否有效
    if (!token) {
        return res.status(401).end()
    }

    try {
    //3. 有效 → 把用户信息读取出来挂载到req请求对象上继续往后执行
        const decodedToken = await verify(token, jwtSecret)
        req.user = await User.findById(decodedToken.userId)
        next()
    } catch (err) {
    //4. 无效 → 响应401状态码
        return res.status(401).end()
    }
    
}