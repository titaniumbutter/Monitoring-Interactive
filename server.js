const express = require('express')
const path = require('path')
const app = express();

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: '9d44fef516bf474e87e5d3033cb1a72b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())

app.get('/', function(req, res) {
    rollbar.log('Hello world!')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


const port = process.env.PORT || 4545

app.listen(port, function () {
    console.log(`Server jamming on ${port}`)
})
