import express from 'express'
import user from './routes/user';
import gym from './routes/gym';
import rutina from './routes/rutina';
import day from './routes/day';
import ejercicio from './routes/ejercicio';
import calentamiento from './routes/calentamiento';
import id from './routes/idRegistro';
const cors = require('cors')
const morgan = require('morgan')
const server = express()
require('dotenv').config()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())
server.use('/user', user)
server.use('/gym', gym)
server.use('/rutina', rutina)
server.use('/day', day)
server.use('/ejercicio', ejercicio)
server.use('/calentamiento', calentamiento)
server.use('/idregistro', id)


module.exports = server
