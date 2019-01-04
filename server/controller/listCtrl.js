import listModel from '../model/listModel'

const getNewsList = async ctx => {
  const result = await listModel.getNewsList()
  await ctx.render('list/index', { title: '新闻页', result })
}
const getNewsDetail = async ctx => {
  console.log('ctx', ctx.request.params)
  const id = ctx.request.body.id || 1
  const result = await listModel.getNewsDetail(id)
  console.log(result.id)
  await ctx.render('list/detail', {title: '详情页', result})
}

export default {
  getNewsList,
  getNewsDetail
}
