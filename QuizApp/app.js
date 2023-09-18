const http = require("http");
const url = require("url");
const fs = require("fs");
const { dirname } = require("path");

const htmlFile = fs.readFileSync(`${__dirname}/index.html`, `utf-8`);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === "/") {
        res.end("Main Page");
    } else if (pathName === "/questions") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlFile);
    } else if (pathName === "/user") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Users Page");
    }else if (pathName === "/questions") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlFile);
    }
});

server.listen(3000, () => {
    console.log("Server is working");
});
