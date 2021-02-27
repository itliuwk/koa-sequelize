const router = require('koa-router')()
const db = require('../tool/db');

const {
  SuccessModel,
  ErrorModel
} = require('../utils/resModel');
router.get('/create', async (ctx, next) => {
  let { name, age } = ctx.query
  let user = await db.User.create({ name, age })
  ctx.body = { code: 200, data: user };
})

router.get('/queryAll', async (ctx, next) => {
  let index = await db.Websites.findAll({
    order: ['alexa'],
    offset: 0,
    limit: 2,
  }); 
  ctx.body = { code: 200, data: index };
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json1'
  }
})

module.exports = router
