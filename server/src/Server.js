const cors = require('cors')
const express = require('express')

const app = express();
app.use(cors());

app.listen('8080', function(){
    console.log('server is running on 8080');
})

app.get('/api', (req, res) => {
    res.send({message:'hello'})
})