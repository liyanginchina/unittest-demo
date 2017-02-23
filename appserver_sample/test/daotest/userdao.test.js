var lib = require('../../dao/userdao');
var should = require("should");

describe('userdao', function() {  
    describe('sieyeid_login', function() {
        it('测试sioeye不存在的情况', function() {
            return lib.sioeye_login('jack78979798').should.be.rejectedWith(Error);
        });

        it('测试sioeye存在的情况', function() {
            return lib.sioeye_login('jack').should.not.be.rejected();
        });

        it('测试sioeye为空字符串的情况', function() {
            return (lib.sioeye_login('')).should.be.rejected();
        });

        it('测试sioeye为null的情况', function() {
            return (lib.sioeye_login(null)).should.be.rejected();
        });
    });

    describe('Promise', function() {
        it('failedPromise', function() {
            lib.failedPromise().should.be.rejectedWith({ message: 'boom' });
        });

        it('asyncFailedPromise', function(done) {
            this.timeout(10000);
            lib.asyncFailedPromise(function(result) {
                done();
            }).should.be.rejectedWith({ message: 'boom' })
        });
    });

});