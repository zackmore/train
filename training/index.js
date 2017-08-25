import Q from '../db/q'


async function showAll (ctx, next) {
  const trainings = await Q.training.findAllTrainings()

  ctx.body = {
    data: trainings
  }
}


export default {
  showAll
}
