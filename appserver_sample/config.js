var appconfig = {};

module.exports = appconfig;
var env = process.env.NODE_ENV||"development";
appconfig.dbconnection = {
    development_reader: {
        client: 'pg',
        connection: "postgres://dev_liyang:!QAZ2wsx@10.120.10.42/sioeye_dev_cnnew",
        pool: {
            min: 0,
            max: 20
        },
        acquireConnectionTimeout: 10000
    },
    development_writer: {
        client: 'pg',
        connection: "postgres://dev_liyang:!QAZ2wsx@10.120.10.42/sioeye_dev_cnnew",
        pool: {
            min: 0,
            max: 20
        },
        acquireConnectionTimeout: 10000
    },

    production_reader: {
        client: 'pg',
        connection: "postgres://dev_liyang:!QAZ2wsx@10.120.10.42/sioeye_dev_cnnew",
        pool: {
            min: 0,
            max: 20
        },
        acquireConnectionTimeout: 10000
    },
    production_writer: {
        client: 'pg',
        connection: "postgres://dev_liyang:!QAZ2wsx@10.120.10.42/sioeye_dev_cnnew",
        pool: {
            min: 0,
            max: 20
        },
        acquireConnectionTimeout: 10000
    },
};

appconfig.redis = {
    ip: '10.120.10.42',
    port: 6380,
    auth: '!QAZ2wsx'
};