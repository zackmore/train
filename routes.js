import Router from 'koa-router'
import user from './user'
import training from './training'

const router = new Router()

router.post('/signin', user.signin)
router.post('/signup', user.signup)
router.get('/trainings', training.showAll)

export default router
