require('dotenv').config()

const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const jwt = require('koa-jwt')
const unless = require('koa-unless')

const middlewarePostValidator = require('./middleware/post-json-validator')
const router = require('./routes')

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
