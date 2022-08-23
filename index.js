const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
  //res는 백이 프론트의 요청(req)에 응답하는 것(백이 프론트로) 
  //즉, Hello World로 응답하겠다 하는 것 res.send('Hello World')
  //req(요청)함수가 끝나면 res(응답)함수 실행
})

app.get('/sound/:name', (req, res) => {
    //const q = req.params
    //console.log(q.id)
    const {name} = req.params
    //p.name = ({'name' : 'dog'})
    //const {name} 는 p.name = ({'name' : 'dog'})와 같다.
    
    if(name == "dog"){
        res.json({'sound':'멍멍'})
    }else if(name == "cat"){
        res.json({'sound':'냐옹','img':'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsrc.hidoc.co.kr%2Fimage%2Flib%2F2022%2F5%2F12%2F1652337370806_0.jpg&imgrefurl=https%3A%2F%2Fwww.hidoc.co.kr%2Fhealthstory%2Fnews%2FC0000697072&tbnid=mbiAcXSmangGFM&vet=12ahUKEwiYgKSm5tz5AhWVAqYKHRcHDCQQMygBegUIARCGAg..i&docid=EkYePiPCjkig8M&w=530&h=338&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwiYgKSm5tz5AhWVAqYKHRcHDCQQMygBegUIARCGAg'})
    }else if(name == "bird"){
        res.json({'sound':'짹짹'})
    }else{
        res.json({'sound':'알수없음'})
    }

})
  // /dog이라는 요청을 보내면 '강쥐'라는 응답을 돌려줘

  app.get('/sound/cat', function (req, res) {
    res.json({'sound':'야옹'})
  })

app.listen(3000)
//듣고 있고 포트 3000의 위치에 표시한다 --localhost:3000