const http = require("https");

http.createServer((req,res) => {
    if(req.url ==="/") {
        res.write("home page")
    }
    else if (req.url === "/about"){
        res.write("About Page")
    }
    else{
        res.write("Page is not found"        )
    }
})