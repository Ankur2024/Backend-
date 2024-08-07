const http = require("http");
const fs = require('fs');

// it will create a web server
const myServer = http.createServer((req, res) => {
    // console.log(req);
    const log = `${Date.now()}: new req received\n`;
    fs.appendFile("log.txt", log, (err, data)=> {
    res.end("Hello from server");

    })
});

myServer.listen(8000, () => console.log("Server Started"));