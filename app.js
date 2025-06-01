'use strict'
const express = require("express")
const app = express()

app.use(express.static('public'));

const debug = (req,res,next)=>{
  console.log("middleware.debug ->", req.method, req.url)
  next()
}

app.use(debug)

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/public/index.html')
})

app.get("/json", (req,res)=>{
  res.json({
    result: 'ok'
  })
})


const PORT = process.env.PORT || 80

app.listen(PORT, (err) =>{
  if(err){
    console.error("i make a fault")
  }
  console.log("normal service...", "http://127.0.0.1:" + PORT)
})
