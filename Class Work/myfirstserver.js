const http=require("http");
const server=http.createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    if(method=="GET" && url=="/google.com"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write("<h1>Welcome to my server</h1>");
        res.end();
    }
})

server.listen(3000,()=>{
    console.log("server is runing at port 3000");
})