import { db } from "../db.js";

export const register = (req,res)=>{
    const q= "select * from users where email =? or username=?";

    db.query(q,[req.body.email,req.body.username],(err,data)=>{

        if(err) return res.json(err);

        if(data.length) return res.status(409).json("user already exist")

        const q = "insert into users ('username','email','password') values (?)"

        const values = [req.body.username,req.body.email.req.email.password]

        db.query(q,[values],(req,res)=>{

            if(err) return res.json(err)
            return res.status(200).json('user created successfully')

        });

    });
}

export const userauth = (req,res)=>{
    res.json({message:"hello controller"});
}