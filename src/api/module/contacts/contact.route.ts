import express from 'express';
 
let ContactRoute=express.Router();
let Contacts=[
    {
        id:1,
        name:"Ram",
        age:30
    },
    {
        id:2,
        name:"Don",
        age:40
    }
];
ContactRoute.get('/',(req,res)=>{
    res.status(200).send(Contacts);
})


export default ContactRoute;