console.log("Web Serverni boshlash");
const express = require("express"); 
const http = require("http"); 
const app = express(); 
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

/*console.log("I am just checking whether it is working or not");
const express = require("express");
const app = express();
const http = require("http"); */

// 1: Kirish codes
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// 2: Session codes - bugun kerak emas

// 3: View codes
app.set("views", "views"); 
app.set("view engine", "ejs"); 

// 4: Rooting codes
app.post("/create-item", (req, res) => {
    /*console.log(req.body);
    res.json({test: "success"}); from old reja*/
 // TODO: code with db here
})

app.get("/author", (req, res) =>{
    res.render("author", { user: user });
});

app.get("/", function(req, res){
    res.render("harid");
});

/*app.get("/", function (req, res) {
  res.end("<h1>HELLO WORLD</h1>");
});

app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovgalar bo'limidasiz</h1>");
}); from old reja express */


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
