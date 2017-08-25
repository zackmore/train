import Router from 'koa-router'
import user from './user'
import training from './training'
import record from './record'

const router = new Router()

router.post('/signin', user.signin)
router.post('/signup', user.signup)
router.get('/trainings', training.showAll)
router.get('/records', record.showAll)

export default router
