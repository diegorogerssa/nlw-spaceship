import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(jwt, {
  secret: 'spacetime',
})

app.register(cors, {
  origin: true,
})
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3050,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('server running port 3050')
  })
