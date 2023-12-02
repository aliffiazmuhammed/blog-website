import express from "express"
import {adduser} from "../controller/user.js"

const router = express.Router();

router.get("/user",adduser)

export default router;