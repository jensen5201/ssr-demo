import db from './config/db'
const listModel = './schema/list'
const renderbusDb = db.renderbus
const newslist = renderbusDb.import(listModel)

const getAllNewsList = async () => {
  const newsList = await newslist.findAll({
    attributes: ['id', 'title', 'keywords', 'createAt', 'updateAt']
  })
  return newsList
}
const getNewsDetail = async id => {
  const newsDetail = await newslist.findOne({
    where: {
      id: id
    },
    attributes: ['id', 'title', 'keywords', 'detail', 'createAt', 'updateAt']
  })
  return newsDetail
}

export default {
  getAllNewsList,
  getNewsDetail
}
