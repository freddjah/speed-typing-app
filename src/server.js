const express = require('express')
const path = require('path')
const server = express()

server.use(express.static('src/public'))

server.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './index.html'))
})

server.listen(process.env.PORT || 3000)