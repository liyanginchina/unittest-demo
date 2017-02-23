var My = require('../sqrt.js');
var should = require("should");
describe("sqrt", function () {

    it("4的平方根应该等于2", function () {
        (My.sqrt(4)).should.be.equal(2);
    });

    it("参数为负值时应该报错", function () {
        (My.sqrt(-4)).should.throws("负值没有平方根");
    });

});