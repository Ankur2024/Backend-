const http = require("http");
const fs = require('fs');
const url = require("url"); // Correct the import here

// it will create a web server
const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} new req received\n`;
    const myUrl = url.parse(req.url, true); 
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err) => {
        if (err) throw err; 
        switch (myUrl.pathname) {
            case "/":
                if(req.method === 'GET') res.end("Home");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end(`Search results for ${search}`);
                break;
            case "/signup":
                if(req.method === "GET") res.end("This is a sign form");
                else if(req.method === "POST"){
                    //DB Query
                    res.end("Sucess");
                }
                break;
            default:
                res.end("404 Not Found !!");
                break;
        }
    });
});

myServer.listen(8000, () => console.log("Server Started"));
