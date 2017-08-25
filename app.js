require('dotenv').config()

import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import jwt from 'koa-jwt'
import unless from 'koa-unless'

import middlewarePostValidator from './middleware/post-json-validator'
import router from './routes'


const app = new Koa()
onerror(app)

app.use(jwt({ secret: process.env.SECRET }).unless({ path: ['/signin', '/signup'] }))
  .use(json())
  .use(logger())
  .use(bodyParser())
  .use(middlewarePostValidator())
  .use(router.routes())


app.listen(3000)
console.log('Server is starting at port 3000')
