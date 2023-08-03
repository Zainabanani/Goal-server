const express = require ('express')
const router = express.Router()
const {
    getAllGoals, 
    getgoal, 
    createGoal, 
    updateGoal, 
    deleteGoal
    
} = require("../controller/goalContoller")

router.route("/").get(getAllGoals).post(createGoal)
router.route("/:goalId").patch(updateGoal).delete(deleteGoal).get(getgoal);

module.exports = router