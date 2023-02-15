import express,{Router} from "express"
import User from "../../models/users/index.js"
import authvalidator from "../../middleware/auth/auth.js"
import { taskValidations } from "../../middleware/validation/index.js"
import { errorMiddleware } from '../../middleware/validation/index.js';
import { body } from 'express-validator';
import nodescheduler from "../../utils/nodescheduler.js"
const router = express.Router()

router.post("/task",authvalidator,taskValidations(),errorMiddleware, async(req,res)=>{
    // console.log(req.payload)
    // console.log(req.body)

   const user = await User.findOne({_id : req.payload.id})
    // console.log(user)
    let todos=user.todos
    let { taskname, deadline } = req.body;
    let tdate = Date.parse(deadline);
    console.log(tdate)
    let pdate = Date.now()
    let intervel = (tdate-pdate)/4
    let reminder = [
        new Date(pdate + intervel),
        new Date(pdate + intervel * 2),
        new Date(pdate + intervel * 3)
];
    // console.log(todos)
    // console.log(req.body.taskname)
  
    todos.push({taskname:taskname,deadline:deadline,reminder})
    user.todos = todos
    // console.log(user)
    // console.log(todos)
    let userdata = User(user)
    userdata.save()
    nodescheduler(req.payload.id,taskname,user.email,reminder)
    res.status(200).json({json:"Task Added Successfully"})
})

export default router