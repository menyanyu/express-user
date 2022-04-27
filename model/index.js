const mongoose = require('mongoose')
const {dbUrl}=require('../config/config.default')

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

//当连接失败的时候
db.on('error', err => {
    console.log('数据库链接失败', err)
})

//当连接成功的时候
db.once('open', function () {
    console.log('数据库链接成功')
})

//组织到处模型类
module.exports={
    User:mongoose.model('User',require('./user'))
}