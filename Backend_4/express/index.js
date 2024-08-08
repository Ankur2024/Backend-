const express = require("express");

//App initialized : App is a handler fucntion
const app = express();
const PORT = 5000;
app.get('/', (req, res) => {
    return res.send("Hello from home in express js");
});

app.get('/about', (req, res) => {
    return res.send("This is about express js");
});

app.get('/search', (req, res) => {
    return res.send(`Your search is "Hey ${req.query.name}"`);
})


// const myServer = http.createServer(app);
// myServer.listen(PORT, () => console.log("Server listening to the port ",PORT));

app.listen(PORT, () => console.log("Server listening to the port ",PORT));