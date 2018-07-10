const Mongod = require('mongod')
const { mongoPort, mongoExePath, mongoDbPath } = require('../config/env.config')

const server = new Mongod({
  port: mongoPort,
  bin: mongoExePath,
  dbpath: mongoDbPath,
})

server
  .open()
  .then(() => {
    console.log('MongoDb Server is running')
  })
  .catch(err => {
    console.log(err)
  })
