import KoaRouter from 'koa-router';
import proxy from '../middleware/Proxy';
import request from '../lib/proxy';
import { delay } from '../lib/util';

const Mock = require('mockjs');

const { Random } = Mock;

const router = new KoaRouter();
router
  .get(`/api/user/page`, async (ctx, next) => {
    const list2 = [];
    for (let i = 0; i < 10; i++) {
      list2.push(Random.cword(5, 6));
    }

    const list1 = [];
    for (let i = 0; i < 10; i++) {
      list1.push({
        name: Random.cword(5, 6),
        age: Random.natural(100, 1000),
        mobile: Random.cword(5, 6),
        address: Random.cword(5, 6),
        tags: list2,
        id: Random.natural(100, 1000),
      });
    }
    ctx.body = {
      code: 200,
      msg: Random.cword(5, 6),
      result: { rows: list1, total: 200 },
    };
  })

  .post(`/api/user/create`, async (ctx, next) => {
    delay(2);
    ctx.body = {
      code: 200,
      msg: Random.cword(5, 6),
      result: Random.natural(100, 1000),
    };
  })
  .post(`/api/user/edit`, async (ctx, next) => {
    delay(2);
    ctx.body = { code: 200, msg: Random.cword(5, 6), result: Random.boolean() };
  })
  .delete(`/api/user/del`, async (ctx, next) => {
    delay(2);
    ctx.body = { code: 200, msg: Random.cword(5, 6), result: Random.boolean() };
  });
module.exports = router;
