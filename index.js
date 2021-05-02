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
    res.status(200).send( {
        "kiwi": "🥝",
        "stawberry": "🍓",
        "pinapple": "🍍",
        "pear": "🍐",
        "banana": "🍌",
        "grapes": "🍇"
    })
});

app.post('/add-fruit',(req,res) => {
    const {id} = req.params;
    const {pinapple} = req.body;
    
    if (!pinapple) {
        res.status(418).send({message: "We need a fruit!"})
    }
    res.send({
        "kiwi": "🥝",
        "stawberry": "🍓",
        "pineapple": "🍍",
        "pear": "🍐",
        "banana": "🍌",
        "grapes": "🍇",
        pinapple : `${pinapple}`
    });
    // res.send({
    //     fruit:id
    // })

});

app.listen(
    PORT, 
    () => console.log(`Listening on http://localhost:${PORT}`)
)