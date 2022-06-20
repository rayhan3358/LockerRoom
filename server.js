const express= require('express')
const app = express()

const users = []

app.get('users',(req,res)=>{
    res.jon(users)
})

app.listen(3000)