const route = require("express").Router();
const db = require("./src/db/models");



route.get("/attendenceReport",async(req,res)=>{
  try {
    let data = await db.StudentMaster.findAll({
      include:{
        model:db.attendenceMaster,
        where:{
          attandence:1
        },
        attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('attendenceMasters.student_id')), 'presentDays']]
      },
      group: 'attendenceMasters.student_id'
    })
    let attt = data.getAssociations();
    console.log(attt)
    res.json({data})
  } catch (error) {
    console.log(error)
  }
 
})


module.exports = route;