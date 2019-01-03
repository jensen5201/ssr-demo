import nunjucks from 'nunjucks'

const createEnv = (path, opts) => {
  let autoescape = opts.autoescape === undefined ? true : opts.autoescape
  let noCache = opts.noCache || false
  let watch = opts.watch || false
  let throwOnUndefined = opts.throwOnUndefined || false
  let env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(path || 'views', {
      noCache: noCache,
      watch: watch
    }),
    {
      autoescape: autoescape,
      throwOnUndefined: throwOnUndefined
    }
  )
  if (opts.filters) {
    for (let f in opts.filters) {
      env.addFilter(f, opts.filters[f])
    }
  }
  return env
}

const templating = (path, opts) => {
  let env = createEnv(path, opts)
  return async (ctx, next) => {
    ctx.render = (view, model) => {
      ctx.response.body = env.render(
        view,
        Object.assign({}, ctx.state || {}, model || {})
      )
      ctx.response.type = 'text/html'
    }
    await next()
  }
}

export default templating
