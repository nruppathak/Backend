// const fs = require('fs');or
// import fs from 'fs';
const fs = require('fs');
fs.writeFileSync('./practice.txt', 'Hello, World!', 'utf8');
console.log('File written successfully.');
