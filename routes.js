const Router = require('koa-router')
const user = require('./user')
const training = require('./training')
const record = require('./record')

const router = new Router()

router.post('/signin', user.signin)
router.post('/signup', user.signup)
router.get('/trainings', training.showAll)
router.get('/records', record.showAll)
router.post('/records', record.newRecord)

module.exports = router
