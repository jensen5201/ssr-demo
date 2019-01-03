export default (sequelize, DataTypes) => {
  return sequelize.define('newslist', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    keywords: {
      type: DataTypes.CHAR(128),
      allowNull: false
    },
    datails: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    createAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updateAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'newslist'
  })
}
