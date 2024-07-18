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
const http = require('http');
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Hello World");
    res.end();
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


