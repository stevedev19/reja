const http = require("http"); 

const mongodb = require("mongodb"); 

let db;
const connectionString = 
'mongodb+srv://abdullatoshtemirov:9lgTJjaXxjk7Bs7q@cluster0.ruwrd2y.mongodb.net/Reja'

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUNifiedTopology: true,

}, (err, client) => {
   if(err) console.log("ERROR on connection Mongo DB");
   else{
    console.log("MongoDB connection succeed");
    module.exports = client;
    const app = require("./app");
    const server = http.createServer(app);
    let PORT = 4007;
    server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
   }
}
);


