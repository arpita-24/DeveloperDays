var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

var todos = [];

app.post('/add',(req,res)=>{
    var newTodo = req.body.newtodo;
    todos.push(newTodo);
    res.redirect('/all');
});



app.get('/all',(req,res)=>{
    res.render("index",{todos:todos});
});

app.listen(4100,()=>{console.log("App listening at port 4100 !")});