//数据访问层
"use strict";
var Promise = require('bluebird');
var knex = require('../dao/knexfile').instance();
module.exports = {
    sioeye_login: function(sioeyeid) {
        console.log(' current module userdao');
        return new Promise(function(resolve, reject) {
            knex('userinfo').where({ 'userinfo.sioeyeid': sioeyeid })
                .select([
                    'users.objectid',
                    'users.password',
                    'users.salt',
                    'users.sessiontoken'
                ])
                .leftJoin('users', 'userinfo.userid', 'users.objectid')
                .then(function(data) {
                    console.log('---db---');
                    console.log(data);
                    if (data.length > 0) {
                        resolve(data[0]);
                    } else {
                        reject(new Error('wrong'));
                    }
                }).catch(function(error) {
                    reject(error);
                });
        });
    },
    failedPromise: function() {
        return new Promise(function(resolve, reject) {
            reject(new Error('boom'));
        })
    },
    asyncFailedPromise: function(callback) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject(new Error('boom'));
                if (typeof (callback) === 'function') {
                    callback();
                }
            }, 5000);
        })
    }
};