import { db } from "../db.js";

export const register = (req, res) => {
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json({msg:"User already exists!",status:false});
  
      const insertQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      
      db.query(insertQuery, [req.body.username, req.body.email,req.body.password], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({msg:"User has been created.",status:true});
      });
    });
  };
  

export const login = (req,res)=>{
    console.log(req.body.username)
    const q = "select * from users where username = ? and password = ?";

    db.query(q,[req.body.username, req.body.password],(err,data)=>{
        
        if(err) return res.status(500).json(err)
        if(data.length === 0){ return res.status(404).json({status:false})
        }else{
            return res.json({status:true,user:data[0]})
        }
    })
}