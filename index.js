var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
var cors = require('cors');

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(cors());

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})

