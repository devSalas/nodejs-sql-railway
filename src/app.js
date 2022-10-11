import  express  from "express";
import { Pool } from "./db.js";
import { PORT } from "./config.js";
const app = express();

app.listen(PORT);

app.get('/',async(req,res)=>{
  const [result,otros]=await Pool.query(`SELECT * FROM users`)
  res.json(result)
})
app.get('/ping',async(req,res)=>{
 const [resultado,otros]=await Pool.query(`SELECT "hello world" as RESULT`)
 console.log(resultado)
  res.json(otros)
})
app.get('/create',async(req,res)=>{
 const [resultado]=await Pool.query(`INSERT INTO users(name) VALUES ("pepe")`)
 console.log(resultado)
  res.json(resultado)
})
console.log("server on port",PORT)

