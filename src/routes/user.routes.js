import { Router } from "express";
import { registeUser } from "../controllers/user.controller.js";


const router=Router()


router.route("/register").post(registeUser);

// router.route("/login").post(login);


export default router 