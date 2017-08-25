import _ from 'lodash'
import Q from '../db/q'


async function showAll (ctx, next) {
  let userid = ctx.state.user.id

  const records = await Q.record.findAllRecords(userid)

  ctx.body = {
    data: records
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


export default {
  showAll,
  newRecord
}
