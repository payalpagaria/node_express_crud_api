import  express  from "express";
import { v4 as uuidv4 } from 'uuid';


const router=express.Router()
const users=[]
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
})
router.post('/',(req,res)=>{
    res.send("hello from post");
    const user=req.body;
    users.push({...user,id:uuidv4()});
});

export default router;