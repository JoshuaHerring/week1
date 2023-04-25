const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("Hello");
});

app.listen(process.env.port || 8080);
console.log('Web Server is listening at port '+ (process.env.port || 8080));