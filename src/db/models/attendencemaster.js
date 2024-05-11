'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attendenceMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.attendenceMaster.belongsTo(models.StudentMaster,{foreignKey:"student_id"})
    }
  }
  attendenceMaster.init({
    date: DataTypes.DATE,
    attandence: DataTypes.TINYINT,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'attendenceMaster',
    timestamps:false
  });
  return attendenceMaster;
};