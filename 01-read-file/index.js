const fs = require('fs');
const path = require('path');
const readeStream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), 'utf8');
readeStream.on('data', (data) => console.log(data));
