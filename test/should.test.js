/**
 * @author Jack
 * @date  16/02/22
 * @description
 *
 */
var Promise = require("bluebird");
var should = require("should");

describe('should', function () {
  describe('#Promise', function () {
    it('should.reject', function () {
      (new Promise(function (resolve, reject) {
        reject(new Error('wrong'));
      })).should.be.rejectedWith('wrong');
    });

    it('should fulfilled', function () {
      (new Promise(function (resolve, reject) {
        resolve({ username: 'jc', age: 18, gender: 'male' })
      })).should.be.fulfilled().then(function (it) {
        it.should.have.property('username', 'jc');
      })
    });

    it('should.reject async', function (done) {
      (new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject(new Error('wrong'));
          done();
        }, 10);
      })).should.be.rejectedWith('wrong');
    });


  });
});