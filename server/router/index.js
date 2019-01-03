/**
 * 整合所有子路由
 */
import koaRouter from 'koa-router'
import list from './list'

const router = koaRouter()
router.use('/', list.routes(), list.allowedMethods())

export default router
