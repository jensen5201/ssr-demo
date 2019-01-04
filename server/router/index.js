/**
 * 整合所有子路由
 */
import koaRouter from 'koa-router'
import indexRouter from './indexRouter'
import listRouter from './listRouter'

const router = koaRouter()
router.use('/', indexRouter.routes(), indexRouter.allowedMethods())
router.use('/list', listRouter.routes(), listRouter.allowedMethods())

export default router
