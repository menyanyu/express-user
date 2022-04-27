var express = require('express');
var router = express.Router();
var userValidator =require('../validator/user')
var userCtrl = require('../controller/user')
var auth = require('../middleware/auth')


// 用户登录
router.post('/login',userValidator.login, userCtrl.login);

// 用户注册
router.post('/register',userValidator.register, userCtrl.register ) 

// 用户信息
router.get('/user',auth,userCtrl.getCurrentUser ) 

module.exports = router;
