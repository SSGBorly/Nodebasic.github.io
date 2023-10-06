const fs = require('fs');

const stream = fs.createReadStream('demo.txt', 'utf-8');

stream.on('data', (x) => {
    console.log(x);
})

stream.on('end', () => {
    console.log('Streaming is end...');
})

stream.on('error', (e) => {
    console.log('Failed to print stream :' + e);
})
