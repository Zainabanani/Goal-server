const Goals = require("../models/goal")


//get all goals
const getAllGoals = async (req, res) =>{
   try {
    const goals = await Goals.find()
    res.status(200).json({success: true, goals})
   } catch (error) {
    console.log(error);
res.send(error)
   }
}

//get a single goal
const getgoal = async (req, res) =>{
    const {goalId} = req.params
    try {
        const goal = await Goals.findById({_id: goalId})
        res.status(200).json({success:true, goal})
    } catch (error) {
        res.json(error)
    }
}

//create a goal
const createGoal = async (req, res) =>{
    const {title, description} = req.body
    if (!title || !description) {
        return res.status(400).json ({success: false, msg: 'Please fill the input fields'})
    }
    try {
       const goal = await Goals.create({...req.body});
       res.status(200).json({success: true, goal})
    } catch (error) {
        res.json(error)
    }
}

//Update a goal
const updateGoal = async (req, res) =>{
    const{ goalId} = req.params
    try {
        const goal = await Goals.findByIdAndUpdate({_id: goalId}, req.body, {
            new: true,
            runvalidators: true,});
            res.status(200).json({success: true, goal})
    } catch (error) {
        res.json(error)
    }
}

//Delete a goal
const deleteGoal = async (req, res) =>{
    const{ goalId} = req.params
    try {
        const goal = await Goals.findByIdAndDelete({_id: goalId})
            res.status(200).json({success: true, msg:'goal deleted'})
    } catch (error) {
        res.json(error)
    }
}


module.exports =  {getAllGoals, getgoal, createGoal, updateGoal, deleteGoal}