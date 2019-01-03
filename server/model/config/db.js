import './../../../env'
import Sequelize from 'sequelize'

const renderbus = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/renderbus`,
  {
    define: {
      timestamps: false
    }
  }
)

export default {
  renderbus
}
