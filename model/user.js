const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

//mongoose数据模型
const userSchema = new mongoose.Schema({
    ...baseModel,
    username: {
        type: String,
        required: true
    },
    // email: {
    //     type: String,
    //     required: true
    // },
    password: {
        type: String,
        required: true,
        set: value => md5(value),
        select:false
    },
    bio: {
        type: String,
        required: null
    },
    image: {
        type: String,
        required: null
    },
    

},{versionKey:false})//去掉__v 

module.exports = userSchema