import list from './../controller/list'
import koaRouter from 'koa-router'

const router = koaRouter()
const routers = router
  .get('/', list.getAllNewsList)
  .get('/list/:id', list.getNewsDetail)

export default routers
