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
      const token = jsonwebtoken.sign(userData, process.env.SECRET, { expiresIn: '7d' })
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
  let body = _.cloneDeep(ctx.request.body)
  const user = await Q.user.findUserByName(body.username)

  if (_.isEmpty(user)) {
    if (body.password != body.passwordRepeat) ctx.throw(403, 'unmatch passwords')

    let userData = {
      username: body.username,
      password: utils.sha256Encode(body.password)
    }

    const result = await Q.user.addUser(userData)

    if (!_.isEmpty(result)) {
      const thisUser = await Q.user.findUserByName(body.username)
      let thisUserData = _.cloneDeep(thisUser)
      delete thisUserData.password
      const token = jsonwebtoken.sign(thisUserData, process.env.SECRET, { expiresIn: '7d' })

      ctx.body = {
        token
      }
    }
  } else {
    ctx.throw(403, 'username already taken')
  }
}


export default {
  signin,
  signup
}
