const PORT =  3000;
const express = require('express');
const server = express();

const { client } = require('./db');
client.connect();


const morgan = require('morgan');
server.use(morgan('dev'));

server.use(express.json())



const apiRouter = require('./api');

server.use((req, res, next) => {
    console.log("<____Body Logger START___");
    console.log(req.body);
    console.log("<___Body Logger END___>");
    
    next();
});
server.use('/api', apiRouter);
  
server.use((req,res,next) => {
    console.log("In index.js")
    res.send("Can't Find That") 
})

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});