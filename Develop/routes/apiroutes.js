var fs = require('fs');

module.exports = function(app) {
    
app.get("/", (req, res) => {
    return fs.readFile(__dirname + "/../public/index.html", (err, data) => {
        if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
    })
})

app.get("/exercise", (req, res) => {
    return fs.readFile(__dirname + "/../public/exercise.html", (err, data) => {
        if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
    })
})

app.get("/stats", (req, res) => {
    return fs.readFile(__dirname + "/../public/stats.html", (err, data) => {
        if (err) throw err;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
    })
})
}