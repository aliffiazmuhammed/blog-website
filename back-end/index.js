import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)



app.listen(8800,()=>{
    console.log("app listening.....");
})