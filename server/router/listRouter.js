import listCtrl from '../controller/listCtrl'
import koaRouter from 'koa-router'

const router = koaRouter()
const routers = router
  .get('/', listCtrl.getNewsList)
  .get('/:id', listCtrl.getNewsDetail)

export default routers
