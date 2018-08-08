let express = require('express');
let app = express();

app.use(express.static(__dirname + '/locam'));
app.get("/helo",function(res,req){
    req.send("Helooooo")
})
app.listen(3000,function(){
    console.log("Hellooo")
    
})