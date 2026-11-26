const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.json({
        message: "Home Page Retrieved"
    })
})

app.listen(4001, ()=>{
    console.log(`Server is running at ${4001} port`)
})