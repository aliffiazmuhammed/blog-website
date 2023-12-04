    import express from "express"
    import {addpost,getpost} from "../controller/post.js"

    const router = express.Router();

    router.post("/write-post",addpost)
    router.get("/get-post",getpost)

    export default router;