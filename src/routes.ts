import express from 'express'
import { Request, Response } from "express";
import { User } from './db'
const cors = require('cors')
const morgan = require('morgan')
const server = express()
require('dotenv').config()

server.use(morgan('dev'))
server.use(express.json())
server.use(cors())

server.get('/allUsers', async (_req: Request, res: Response) => {
    console.log('GETsad')
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

server.post('/users', async (req: Request, res: Response) => {
    const { name, surname } = req.body
    try {
        const newUser = await User.create({ name, surname })
        console.log(newUser)
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})


module.exports = server
