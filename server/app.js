import './../env'
import path from 'path'
import Koa from 'koa'
import stat from 'koa-static'
import koaBodyparser from 'koa-bodyparser'
import router from './router'
import templating from './templating'

const resolve = dir => {
  return path.join(__dirname, '..', dir || '')
}
const isPro = process.env.NODE_ENV === 'production'
const app = new Koa()
const port = process.env.PORT

app.use(koaBodyparser())
app.use(stat(resolve('static')))
app.use(templating(path.resolve(__dirname, 'views'), {
  noCache: !isPro,
  watch: !isPro
}))
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  process.stdout.write(`server started at ${port}\n`)
})
