import KoaRouter from 'koa-router';
import { Random } from 'mockjs';
import proxy from '../middleware/Proxy';
import { delay } from '../lib/util';

const router = new KoaRouter();
router
  .get(`/application/page`, async (ctx, next) => {
    const { size } = ctx.query;
    const list1 = [];
    delay(1);
    for (let i = 0; i < size; i++) {
      list1.push({
        id: Random.id(),
        name: Random.cword(5, 6),
        code: Random.word(5, 6),
        createdDate: Random.datetime(),
        updatedDate: Random.datetime(),
      });
    }
    ctx.body = {
      code: 200,
      msg: '',
      result: { records: list1, pages: 20 },
    };
  })
  .delete(`/application/del/:id`, async (ctx, next) => {
    ctx.body = { code: 200, msg: Random.cword(5, 6), result: Random.boolean() };
  })
  .get(`/application/info/:id`, async (ctx, next) => {
    ctx.body = {
      code: 200,
      msg: Random.cword(5, 6),
      result: {
        id: Random.natural(100, 1000),
        name: Random.cword(5, 6),
        code: Random.word(5, 6),
        createdDate: Random.cword(5, 6),
        updatedDate: Random.cword(5, 6),
      },
    };
  })
  .post(`/application/add`, async (ctx, next) => {
    ctx.body = {
      code: 200,
      msg: Random.cword(5, 6),
      result: Random.natural(100, 1000),
    };
  })
  .post(`/application/edit`, async (ctx, next) => {
    delay(2);
    ctx.body = { code: 200, msg: Random.cword(5, 6), result: Random.boolean() };
  });
module.exports = router;