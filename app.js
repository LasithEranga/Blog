const express = require('express');
const app = express();
const bodyPaser = require('body-parser');
const ejs = require("ejs");
const featuredPost = [];
const homeContents = [];
const _ = require('lodash');


app.set('view engine', 'ejs');
app.use(bodyPaser.urlencoded({extended:true}));
app.use(express.static('public'));



//setting data for featured post
featuredPost.push({title:"MDN Web Docs", content:"MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center, is a documentation repository and learning resource for web developers used by Mozilla, Microsoft, Google, and Samsung."})
app.get('/', (req, res)=>{
    res.render('index', {featuredPost:featuredPost});
})

app.listen(3000, ()=>{
    console.log("App started on port 3000");
})