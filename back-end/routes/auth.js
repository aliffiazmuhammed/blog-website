import express from "express"
import {userauth} from "../controller/auth.js"

const router = express.Router();

router.get("/auth",userauth)

export default router;