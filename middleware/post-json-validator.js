import _ from 'lodash'
import Joi from 'joi'


async function validateSignIn (ctx, next) {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(4).max(20).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{4,30}$/).required()
  })

  const { error, value } = Joi.validate(ctx.request.body, schema)

  if (_.isNull(error)) {
    await next()
  } else {
    ctx.throw(400, 'bad request', error)
  }
}


async function validateSignUp (ctx, next) {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(4).max(20).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{4,30}$/).required(),
    passwordRepeat: Joi.string().regex(/^[a-zA-Z0-9]{4,30}$/).required()
  })

  const { error, value } = Joi.validate(ctx.request.body, schema)

  if (_.isNull(error)) {
    await next()
  } else {
    ctx.throw(400, 'bad request', error)
  }
}


async function validateNewRecord (ctx, next) {
  const schema = Joi.object().keys({
    meter: Joi.number().integer().min(0).required(),
    training_id: Joi.number().integer().required(),
    user_id: Joi.number().integer()
  })

  const { error, value } = Joi.validate(ctx.request.body, schema)

  if (_.isNull(error)) {
    await next()
  } else {
    ctx.throw(400, 'bad request', error)
  }
}


export default function () {
  return async function (ctx, next) {
    if (_.startsWith('/signin', ctx.url) && ctx.method === 'POST') {
      await validateSignIn(ctx, next)
    } else if (_.startsWith('/signup', ctx.url) && ctx.method === 'POST') {
      await validateSignUp(ctx, next)
    } else if (_.startsWith('/records', ctx.url) && ctx.method === 'POST') {
      await validateNewRecord(ctx, next)
    } else {
      await next()
    }
  }
}
