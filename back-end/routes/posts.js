    import express from "express"
    import {addpost,deletepost,getpost,showpost} from "../controller/post.js"

    const router = express.Router();

    router.post("/write-post",addpost)
    router.get("/get-post",getpost)
    router.get("/show-post",showpost)
    router.post("/delete-post",deletepost)

    export default router;