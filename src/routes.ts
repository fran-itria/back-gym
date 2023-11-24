import express from 'express'
import user from './routes/user';
import gym from './routes/gym';
const cors = require('cors')
const morgan = require('morgan')
const server = express()
require('dotenv').config()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use('/user', user)
server.use('/gym', gym)


module.exports = server
