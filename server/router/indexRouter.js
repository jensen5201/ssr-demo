import indexCtrl from '../controller/indexCtrl'
import koaRouter from 'koa-router'

const router = koaRouter()
const indexRouter = router
  .get('/', indexCtrl.Init)

export default indexRouter
