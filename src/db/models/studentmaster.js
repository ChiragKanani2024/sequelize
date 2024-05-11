'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     models.StudentMaster.hasMany(models.attendenceMaster,{foreignKey:"student_id"})
    }
  }
  StudentMaster.init({
    first_name: {
      type: DataTypes.STRING
    },
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
    },
    mobile_no:{
      type:DataTypes.BIGINT
    },
     age:{
      type:DataTypes.INTEGER
    },
    pincode:{
      type:DataTypes.INTEGER
    },
    city:{
      type:DataTypes.STRING
    },
    aadhar_no:{
      type:DataTypes.BIGINT
    },
    gender:{
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'StudentMaster',
    timestamps:false
  });
  return StudentMaster;
};