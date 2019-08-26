// 导入express
const express = require('express')
// 导入body-parser中间件，方便获取请求主体数据。
const bodyParser = require('body-parser')

const userRouter = require('./routes/userRouter')


const app = express()
app.listen(5050, () => {
  console.log('服务器创建成功！')
})

// 使用中间件进行拦截处理,便于获取请求主体参数。
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// 静态资源托管文件存放地址。
app.use(express.static(__dirname + '/public'))

app.use('/user', userRouter)