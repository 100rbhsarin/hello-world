const express  = require("express")
const app = express()
const port = 5000

// app.get("/",function(req, res){
//     res.send("Hello saurabh sarin how r you i am fine and i am from ranchi kkkkkk")
// })


//convert json in javascript object

app.use(express.json())

app.get("/a1/",(req, res)=>{
    res.send("hello saurabh")
})


app.post("/mul", (req,res)=>{
    let {n1,n2} = req.query
    let mul = n1*n2
    console.log(mul)
    res.send('Mul is:'+ mul)
})

app.post('/div',(req, res)=>{
console.log(req.body.name)
let {name,n1,n2} = req.body
let div = n1/n2
    res.send("division" + div)
})



// app.post("/a2/",function(req, res){
//     res.send("Hello mahi")
// })

app.listen(port,()=> {console.log("server is runing ...")})