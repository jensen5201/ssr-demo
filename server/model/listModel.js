import db from './config/db'
const listSchema = './schema/listSchema'
const renderbusDb = db.renderbus
const newslist = renderbusDb.import(listSchema)

const getNewsList = async () => {
  const newsList = await newslist.findAll({
    attributes: ['id', 'title', 'keywords', 'createAt', 'updateAt']
  })
  return newsList
}
const getNewsDetail = async id => {
  const newsDetail = await newslist.findOne({
    where: {
      id: id
    }
  })
  return newsDetail
}

export default {
  getNewsList,
  getNewsDetail
}
