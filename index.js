const fs = require('fs')
const express = require('express')
const app=express();
const PORT = 8080;

app.use(express.json())

app.get('/',(req,res) => {
    res.status(200).send({
        "message" : "OK"
    })
});

app.get('/fruits',(req,res) => {
    const data = loadData()
    res.status(200).send(data)
});

app.post('/add-fruit',(req,res) => {
    const body = req.body
    const data = loadData()
    data.push(body)
    savaData(data)
    const f_data = loadData()
    console.log(f_data)
    res.send(f_data)
});

const loadData = function(){
    const dataBuffer = fs.readFileSync('database.json')
    const dataJSON = dataBuffer.toString()
    return(JSON.parse(dataJSON))
}

const savaData = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('database.json',dataJSON)
}

app.listen(
    PORT, 
    () => console.log(`Listening on http://localhost:${PORT}`)
)