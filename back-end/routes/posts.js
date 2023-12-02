    import express from "express"
    import {addpost} from "../controller/post.js"

    const router = express.Router();

    router.get("/test",addpost)

    export default router;