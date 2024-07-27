// const math = require("./math.js");

// const result = math.add(1, 6);
// const result2 = math.subtract(1, 3);
// const result3 = math.multiply(1, 3);
// const result4 = math.divide(1, 3);

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log("meow");

// const fs = require('fs');

// fs.readFile('greet.txt', 'utf-8', (err,data)=>{
//     // if(err) throw err;
//     // console.log(data);
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data);
//     }
// });


// fs.writeFile('greet.txt', 'Hello World', (err)=>{
//     if(err){
//         console.log("Error:", err)
//     }else{
//         console.log("File written sucessfully");
//     }
// });

// fs.appendFile('greet.txt', 'Hel', (err)=>{
//     if(err){
//         console.log("Error:", err)
//     }else{
//         console.log("File written sucessfully");
//     }
// })

// fs.unlink('greet.txt', 'Hel', (err)=>{
//     if(err){
//         console.log("Error:", err)
//     }else{
//         console.log("File written sucessfully");
//     }
// })


// const file = require('./math.js')
// const readFile = file.readFile;

//create server http module
// const http = require('http');
// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write("Hello World");
//     res.end();
// });

// server.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// })


// const express = require('express');
// const app =express();

// app.use(express.json);

// const users = [
//     {
//         id:1,
//         name:"John"
//     },
//     {
//         id:2,
//         name:"Doe"
//     },
//     {
//         id:3,
//         name:"Meow"
//     }
// ]


// app.get('/',(req, res)=>{
//     res.send("Hello Wasdasorld")    
// });

// app.get('/users/:id',(req, res)=>{
//     const user_id = req.params.id;
//     console.log(user_id);
//     // res.json(users);
//     const user = users.find((user) => user.id ==  parseInt(user_id));
//     if(!user){
//         res.status(404).send("User not found");
//     }else{
//         res.send(user);
//     }
// });

// app.post("/post-user", (req,res)=>{
//     // const data = req.body;
//     // const name = req.name;
//     const name = req.body.name;
//     res.send(name);
// })



// app.listen(3000,()=>{
//     console.log("3000");
// });
require('dotenv').config();

const express = require('express');
const app =express();

const connectDB = require('./src/config/db')
const userRoute = require('./src/routes/userRoute')
const productRoute = require('./src/routes/productRoute')
const authRoute = require('./src/routes/authRoute')


app.use(express.json());
const port = process.env.port;

// app.use('/user', userRoute)
app.use('/user', productRoute)
app.use('/api/auth', authRoute)

//used to connect to the database
connectDB();

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!'));

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})