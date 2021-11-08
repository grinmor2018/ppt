const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist/PPT'));
app.get('/',function(req,res){
    res.sendFile(path.join('../dist/PPT/index.html'));
  });

app.listen(process.env.PORT || 8080);
