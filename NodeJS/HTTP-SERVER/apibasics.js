const http = require("http");

http.createServer((req,res) => {
    res.setHeader("Content-type","application/json")
    res.write(JSON.stringify({
        name: "begins",
        skill: "Node"
    }))
    res.end()
}).listen(30000)