import  express  from "express";
import { v4 as uuidv4 } from 'uuid';


const router=express.Router()
let users=[]
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
})
router.post('/',(req,res)=>{
    const user=req.body;
    users.push({...user,id:uuidv4()});
    res.send(users);

    
});
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const founduser=users.find((user)=>user.id===id);
    res.send(founduser);
})
router.delete('/:id',(req,res)=>{
    console.log(`user with id ${req.params.id} has been deleted`);
    users = users.filter((user) => user.id != req.params.id);
})
export default router;