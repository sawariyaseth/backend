/*const catme=require('cat-me');
console.log(catme());*/
const http = require('http');



const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('moderndeployment');
    }
    else if(req.url==='/health'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('OK');
    }
    else if(req.url==='/ready'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('READY');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Not Found');
    }
   
})
server.listen(3000,()=>{
    console.log("server is listening on port 3000");
})