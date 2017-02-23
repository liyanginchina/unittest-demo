var usercontroller = require('../../controller/usercontroller');
var userdao = require('../../dao/userdao');
var should = require("should");
var muk = require("muk");

var Promise = require('bluebird');

//console.log(lib.sioeye_login('jack78979798'));
describe('usercontroller', function () {
    describe('sioyeid_login', function () {
        before(function () {
            muk(userdao, 'sioeye_login', function () {
                return new Promise(function (resolve, reject) {
                    reject(new Error('mock wrong'));
                })
            });
        });

        it('测试sioeye不存在的情况', function () {
            return usercontroller.sioeye_login('jack78979798').should.be.rejectedWith(Error);
        });
        after(function () {
            muk.restore();
        });

    });

    describe('sioyeid_login', function () {
        before(function () {
            muk(userdao, 'sioeye_login', function () {
                return new Promise(function (resolve, reject) {
                    resolve([1]);
                })
            });
        });

        it('测试sioeye存在的情况', function () {
            return usercontroller.sioeye_login('jack').should.not.be.rejected();
        });
        after(function () {
            muk.restore();
        });
    });

    describe('sioyeid_login', function () {
        before(function () {
            muk(userdao, 'sioeye_login', function () {
                return new Promise(function (resolve, reject) {
                    reject(new Error('wrong'));
                })
            });
        });

        it('测试sioeye为空字符串的情况', function () {
            return usercontroller.sioeye_login('').should.be.rejected();
        });
        after(function () {
            muk.restore();
        });
    });

    describe('sioyeid_login', function () {
        before(function () {
            muk(userdao, 'sioeye_login', function () {
                return new Promise(function (resolve, reject) {
                    reject(new Error('wrong'));
                })
            });
        });

        it('测试sioeye为null的情况', function () {
            return usercontroller.sioeye_login(null).should.be.rejected();
        });
        after(function () {
            muk.restore();
        });
    });

});