/**
 * @author Jack
 * @date  16/02/22
 * @description
 *
 */

var fs = require("fs");

exports.limit = function (num) {
  return num < 0 ? 0 : num;
};

exports.async = function (callback) {
  setTimeout(function () {
    callback(10);
  }, 10);
};

exports.getContent = function (filename, callback) {
  fs.readFile(filename, 'utf-8', callback);
};

function _adding(num1, num2) {
  return num1 + num2;
}

var usercontroller=require('./appserver_sample/controller/usercontroller');
usercontroller.sioeye_login('jack78979798');