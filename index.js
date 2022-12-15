const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/product', function(req, res){
    res.sendFile(__dirname + '/Product.html')
})

app.listen(3000, () => {
    console.log("start server at Port 3000")
})
