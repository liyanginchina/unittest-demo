var lib = require("../sample");
var rewire = require("rewire");
var should = require("should");

describe('module', function () {
    // 测试私有方法
    describe('check', function () {
        it('check', function () {
            var lib = rewire('../sample');
            var check = lib.__get__('_check');
            var result = check(1, 3);
            result.should.be.ok();
        });
    });
});