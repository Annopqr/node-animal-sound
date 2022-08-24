const express = require('express')
var cors = require('cors')
const app = express()


app.use(cors())

app.get('/', function (req, res) {
  res.json('Hello World')
})

app.get('/name', function (req, res){
  res.json('hello')
})

app.get('/name/:initial', (req, res)=>{
  const {initial} = req.params
  

  if(initial == "An"){
    res.json({'name':'MinJeong'})
  }else if(initial == "Yu"){
    res.json({'name':'ion'})
  }else if(initial == "Choi"){
    res.json({'name':'gigi'})
  }else{
    res.json({'name':'회원이 아님'})
  }
})

app.listen(3001)