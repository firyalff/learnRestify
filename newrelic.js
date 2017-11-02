'use strict'
const nrConfig = require('./configs/newrelic')[process.env.NODE_ENV];

exports.config = {
  app_name: (nrConfig.app_name),
  license_key: (nrConfig.license_key),
  logging: (nrConfig.logging)
}
