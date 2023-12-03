import express from "express"
import {userauth,register} from "../controller/auth.js"

const router = express.Router();

router.post("/register",register)
router.get("/userauth",userauth)

export default router;