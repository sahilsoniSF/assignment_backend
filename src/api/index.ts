import express , {Application, Router } from "express";
import UserRouter from './module/users/index';
import Contacts from './module/contacts/index';
let router=express.Router();
router.use('/users',UserRouter);
router.use('/contacts',Contacts);
export default router;
