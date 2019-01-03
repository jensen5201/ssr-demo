import list from '../model/list'

const getAllNewsList = async ctx => {
  const result = await list.getAllNewsList()
  // ctx.body = {
  //   success: true,
  //   result
  // }
  console.log(result)
  await ctx.render('index.html', result)
}
const getNewsDetail = async ctx => {
  const id = ctx.body.id
  const result = await list.getNewsDetail(id)
  // ctx.body = {
  //   success: true,
  //   result
  // }
  await ctx.render('index.html', result)
}

export default {
  getAllNewsList,
  getNewsDetail
}
