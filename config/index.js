require('dotenv').config();

/**
 * @factory config
 * @description base app's configuration
 * @returns {{
 *    type: (*),
 *    rest: (*),
 *    db: {
 *      dialect: string,
 *      host: (*),
 *      port: (*),
 *      database: (*),
 *      login: (*),
 *      pass: (*)},
 *      rabbit: {
 *        url: (*),
 *        serviceName: (*),
 *        icoServiceName: (*)
 *        }
 *      }
 *    }
 */

module.exports = {
  type: process.env.TYPE || 'SNT', //BTC, ETH, SNT
  rest: process.env.REST || 'http://localhost:8082',
  db: {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'data',
    login: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || '123'
  },
  rabbit: {
    url: process.env.RABBIT_URI || 'amqp://localhost:5672',
    serviceName: process.env.RABBIT_SERVICE_NAME || 'app_eth',
    icoServiceName: process.env.RABBIT_ICO_SERVICE_NAME || 'ico-promo'
  }
};