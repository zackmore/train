import Router from 'koa-router'
import user from './user'

const router = new Router()

router.post('/signin', user.signin)
router.post('/signup', user.signup)

export default router
