import _ from 'lodash'
import jsonwebtoken from 'jsonwebtoken'
import Q from '../db/q'
import * as utils from '../common/utils'


async function signin (ctx, next) {
  let body = _.cloneDeep(ctx.request.body)
  const user = await Q.user.findUserByName(body.username)

  if (!_.isEmpty(user)) {
    if (utils.sha256Encode(body.password) === user.password) {
      let userData = _.cloneDeep(user)
      delete userData.password
      const token = jsonwebtoken.sign(userData, 'haha', { expiresIn: '7d' })
      ctx.body = {
        token
      }
    } else {
      ctx.throw(401, 'wrong username or password')
    }
  } else {
    ctx.throw(401, 'wrong username or password')
  }
}


async function signup (ctx, next) {
  try {
  } catch (err) {
    ctx.throw(500, 'server error')
  }
}


export default {
  signin,
  signup
}
