import KoaRouter from 'koa-router';
import { Random } from 'mockjs';
import proxy from '../middleware/Proxy';
import { delay } from '../lib/util';

const router = new KoaRouter();
router.get(`/application/page`, async (ctx, next) => {
  const list1 = [];
  for (let i = 0; i < 10; i++) {
    list1.push({
      name: Random.cword(5, 6),
      code: Random.cword(5, 6),
      createdDate: Random.cword(5, 6),
      updatedDate: Random.cword(5, 6),
    });
  }
  ctx.body = {
    code: 200,
    msg: '',
    result: list1,
  };
});
module.exports = router;
