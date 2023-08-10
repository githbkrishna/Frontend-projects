// section 1 ,  File based modules ---

// const a = {
//     average: (a, b) => {
//         console.log((a + b) / 2);
//     },
//     percent: (a, b) => {
//         console.log((a/b)*100);
//     },
// }
// module.exports = a;

// section 2 , Buildin modules ---

// const fs = require("fs")
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//     if (err) {
//         return err;
//     }
//     console.log(data);
// });
// console.log("I am First");


// section 3 ----

// const fs = require("fs")
// const a = fs.readFileSync("./sample.txt", "utf-8");

// // const (readFileSync) = require("fs")
// // const a = readFileSync("./sample.txt", "utf-8");

// console.log(a);
// console.log("I am First");

// section 4-----

// const fs = require("fs")
// const a = "This is made by me.";
// fs.writeFileSync("./sample.txt", a);
// console.log("I am First");

// section 5 ----

// const path = require("path");
// const a = path.extname("/node/index.js");
// const a = path.basename("C:/Users/user/Downloads/complete web dev Bootcamp/New folder/NodeJS");
// const a = path.dirname("C:/Users/user/Downloads/complete web dev Bootcamp/New folder/NodeJS");
// console.log(a);

// section 6 ---

// const path = require("path");
// b = "/hhh";
// const a = path.join("C:/Users/user/Downloads/complete web dev Bootcamp/New folder/NodeJS" + b);
// console.log(a);

// section 7 ---

// const os = require("os");
// console.log(os.freemem());
// console.log(os.hostname());

// section 8 third party modules---

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.end("Working");
// });
// server.listen(80,"localhost",()=>{
//     console.log("server is running on http://localhost:80")
// });

const http = require("http");
const fs = require("fs");

const port = 80;
const hostname = "localhost";
const home = fs.readFileSync("./Delete.index.html", "utf-8");

const server = http.createServer((req,res)=>{
    if (req.url === "/"){
        return res.end(home);
    }
    if (req.url === "/about"){
        return res.end("<h1>about page</h1>");
    }
    if (req.url === "/contact"){
        return res.end("<h1>contact page</h1>");
    }
    if (req.url === "/service"){
        return res.end("<h1>service page</h1>");
    } else{
        return res.end("<h1>404 page not found</h1>");
    }
});
server.listen(port,hostname,()=>{
    console.log(`server is running on http://${hostname}:${port}`);
});



// section 9 ---



// section 10 ---