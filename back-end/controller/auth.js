import { db } from "../db.js";

export const register = (req, res) => {
    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  
    db.query(q, [req.body.email, req.params.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
  
      const insertQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      console.log(req.body.username)
      
      db.query(insertQuery, [req.body.username, req.body.email,req.body.password], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      });
    });
  };
  

export const userauth = (req,res)=>{
    res.json({message:"hello controller"});
}