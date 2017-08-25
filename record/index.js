const _ = require('lodash')
const Q = require('../db/q')


async function showAll (ctx, next) {
  let userid = ctx.state.user.id

  const records = await Q.record.findAllRecords(userid)
  const resData = records.map(r => {
    return {
      id: r.id,
      trainingName: r.name,
      date: r.created_at,
      meter: r.meter
    }
  })

  ctx.body = {
    data: resData
  }
}


async function newRecord (ctx, next) {
  let userid = ctx.state.user.id
  let recordData = _.cloneDeep(ctx.request.body)
  recordData.user_id = userid

  const result = await Q.record.addRecord(recordData)

  if (!_.isEmpty(result)) {
    ctx.status = 201
    ctx.body = {
      status: 'success'
    }
  }
}


module.exports = {
  showAll,
  newRecord
}
