const fs = require('fs');

// fs.writeFile('demo.txt', 'hello from demo file', (err, data) => {
//     console.log("File created...")
// })

// fs.readFile('demo.js', 'hello from demo file', (err, data) => {
//     console.log(data)
// })

fs.appendFile('demo.txt', ' Add this @***@**', (err, data) => {
    console.log("Updation is Successful...");
})

// fs.unlink('demo.js', (err) => {
//     console.log('File deleted...');
// })

// Blocking and unblocking


// Blocking = synchronous


// console.log("Hello, this is Statement 1");

// console.log('data is loading...');

// const data = fs.readFileSync('demo.txt', 'utf-8');

// console.log(`Loading is complete and data is : ${data}`);

// console.log("Byee...")


// Unblocking = asynchronous


// console.log("Hello, this is Statement 1");

// console.log('data is loading...');

// fs.readFile('demo.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log("Data fetching failed" + err);
//     }
//     else {
//         console.log(`loading is complete and data is : ${data}`);
//     }
// })

// console.log("Byee...")