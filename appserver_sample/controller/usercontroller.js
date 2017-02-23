//业务层
"use strict";
var userdao = require('../dao/userdao');
var Promise = require('bluebird');
module.exports = {
    sioeye_login: function (sioeyeid) {
        console.log(' current module usercontroller');
        //对参数进行检查
        if (sioeyeid === undefined || sioeyeid.trim().length === 0) {
            return new Promise(function (resolve, reject) {
                reject(new Error('参数错误'));
            });
        } else {
            return new Promise(function (resolve, reject) {
                userdao.sioeye_login(sioeyeid).then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        }
    }
};