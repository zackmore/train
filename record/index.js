import Q from '../db/q'


async function showAll (ctx, next) {
  let userid = ctx.state.user.id
  const records = await Q.record.findAllRecords(userid)

  ctx.body = {
    data: records
  }
}


export default {
  showAll
}
