import './../env'
import path from 'path'
import fs from 'fs'
import Koa from 'koa'
import stat from 'koa-static'
import koaBodyparser from 'koa-bodyparser'
import router from './router'
// import templating from './templating'
import { createBundleRenderer } from 'vue-server-renderer'

const resolve = dir => {
  return path.join(__dirname, '..', dir || '')
}
const app = new Koa()
const port = process.env.PORT
const isPro = process.env.NODE_ENV === 'production'
let renderer
const templatePath = resolve('index.html')
const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    runInNewContext: false
  }))
}
const renderToStringPromise = (context, s) => {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) {
        console.log(err)
      }
      if (!isPro) {
        console.log(`whole request: ${Date.now() - s}ms`)
      }
      resolve(html)
    })
  })
}
if (isPro) {
  const template = fs.readFileSync(templatePath, 'utf-8')
  const bundle = require('./../dist/vue-ssr-server-bundle.json')
  const clientManifest = require('./../dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })
  app.use(stat(path.resolve('dist'), {
    hidden: 'index.html'
  }))
} else {
  require('./../build/setup-dev-server')(app, (bundle, template) => {
    renderer = createRenderer(bundle, { template })
  })
}
const render = async (ctx, next) => {
  if (!renderer) {
    ctx.body = 'waiting for compilation... refresh in a moment.'
    return ctx.body
  } else {
    let req = ctx.req
    ctx.type = 'html'
    const s = Date.now()
    let context = { url: req.url }
    ctx.body = await renderToStringPromise(context, s)
    return ctx.body
  }
}

app.use(koaBodyparser())
app.use(stat(resolve('static')))
// app.use(templating(path.join(__dirname, 'views-nunjucks'), {
//   noCache: !isPro,
//   watch: !isPro
// }))
app.use(router.routes(), router.allowedMethods())
router.get('*', async (ctx, next) => {
  return render(ctx, next)
})

app.listen(port, () => {
  process.stdout.write(`server started at ${port}\n`)
})
