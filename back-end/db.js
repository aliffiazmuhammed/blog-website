import mysql from "mysql" 


export const db = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"alif",
    database:"blog"
}) 
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});