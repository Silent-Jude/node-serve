const express = require('express')

const router = express.Router()

const result = {
  code: '',
  data: ''
}

router.get('/login',(req, res, next) => {
  var {uname, upwd} = req.query
  if (uname === 'admin' && upwd === '123456') { 
    result.code = 200
    result.data = {uname}
  }
  res.send(result)
})

module.exports = router