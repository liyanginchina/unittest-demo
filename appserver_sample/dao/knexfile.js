/**
 * 数据库连接配置
 *
 * @module server
 * @submodule db
 * @class knex
 */
var config = require('../config');
var pgwriter;
var pgreader;
var env = process.env.NODE_ENV||"development";
console.log('当前系统环境类型：'+env);
module.exports = {
    /**
     * 开发环境配置
     *
     * @property development
     * @type Object
     */
    development_reader: config.dbconnection.development_reader,
    development_writer: config.dbconnection.development_writer,
    /**
    * 生产环境配置
    *
    * @property production
    * @type Object
    */

    production_reader: config.dbconnection.production_reader,
    production_writer: config.dbconnection.production_writer,
    /**
     * 返回可写数据库连接实例
    *
    * @method instance
    * @return {Object} pgInstance
    */
    instance: function () {
        if (!pgwriter) {
            if (env === "development") {
                pgwriter = require('knex')(this.development_writer);
            } else {
                pgwriter = require('knex')(this.production_writer);
            }
        }
        return pgwriter;
    },

       /**
       * 返回只读数据库连接实例
       *
       * @method readerInstance
       * @return {Object} pgInstance
       */
    readerInstance: function () {
        if (!pgreader) {
            if (env === "development") {
                pgreader = require('knex')(this.development_reader);
            } else {
                pgreader = require('knex')(this.production_reader);
            }
        }
        return pgreader;
    }
};