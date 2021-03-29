import express,{Application, Router} from 'express';

let UserRouter=express.Router();
const Users=[
    {
        id:1,
        name:"AAAA",
        age:30
    },
    {
        id:2,
        name:"bbb",
        age:40
    }
];

UserRouter.get('/',(req,res)=>{
    
    res.status(200).send(Users);
})

UserRouter.post('/add',(req,res)=>{
    Users.push(req.body);
    res.status(201).send(Users);
})

export default UserRouter;
