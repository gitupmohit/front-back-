import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
  res.send("welcome to home page")
})

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
    id:1,
    title:"this is first joke",
    content:"first joke is here"
  },
    {
    id:2,
    title:"this is second joke",
    content:"second joke is here"
  },
    {
    id:3,
    title:"this is third joke",
    content:"third joke is here"
  },
    {
    id:4,
    title:"this is fourth joke",
    content:"fourth joke is here"
  },
    {
    id:5,
    title:"this is fifth joke",
    content:"fifth joke is here"
  },
    
]
res.json(jokes)
})

app.listen(PORT,()=>{
 console.log(`server at http://localhost:3000`)
})