import express from 'express';
import bodyparser from 'body-parser';
import router from './api';

const app= express();

app.use(bodyparser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    if(req.get("token")=="jwttoken")
    {
        // res.send("Verified !")
        next();
    }
    else{
        next(401);
    }
})

app.use('/api',router);
export default app;