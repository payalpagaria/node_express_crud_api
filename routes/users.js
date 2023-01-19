import  express  from "express";
const router=express.Router()
const users=[{
    Fname:"payal",
    Lname:"pagariya",
    age:22
}]
router.get('/',(req,res)=>{
    console.log(users);
    res.send(users);
})
router.post('/',(req,res)=>{
    res.send("hello from post");
    const user=req.body;
    users.push(user);
});

export default router;