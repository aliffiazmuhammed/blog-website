import { db } from "../db.js";

export const addpost = (req,res)=>{
    const insertQuery = "INSERT INTO posts (title, description,uid) VALUES (?, ?, ?)";
    db.query(insertQuery, [req.body.title, req.body.description,req.body.uid], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({msg:"post added",status:true});
      });
}

export const getpost = (req, res) => {
    const getquery = "select * from posts where uid =?";
    db.query(getquery, [req.query.uid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ msg: "got data", status: true, dat: data });
    });
  };

export const showpost=(req,res)=>{
    const getquery = "select * from posts where id =?"

    db.query(getquery, [req.query.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ msg: "got data", status: true, dat: data });
      });
}

export const deletepost=(req,res)=>{
    const deletequery = "delete from posts where id =?"
    db.query(deletequery, [req.body.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ msg: "data deleted", status: true, dat: data });
      });
}