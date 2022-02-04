const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(bodyPaser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(3000, ()=>{
    console.log("App started on port 3000");
})