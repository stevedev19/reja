console.log("Web Serverni boshlash");
const express = require("express"); 

const app = express(); 
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

/*console.log("I am just checking whether it is working or not");
const express = require("express");
const app = express();
const http = require("http"); */

// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


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
    console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
    /*console.log(req.body);
    res.json({test: "success"}); from old reja*/
 // TODO: code with db here
});
/*clearInterval
app.get("/author", (req, res) =>{
    res.render("author", { user: user });
});*/

app.post("/delete-item", (req, res)=> {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    {_id: new mongodb.ObjectId(id)}, 
    function(err, data) {
   res.json({state: "success"});
  }
);
});

app.get("/", function(req, res){
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
      if(err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", {items: data});
      }
    });
});

/*app.get("/", function (req, res) {
  res.end("<h1>HELLO WORLD</h1>");
});

app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovgalar bo'limidasiz</h1>");
}); from old reja express */


module.exports = app;