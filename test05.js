const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, 'datas', 'writeLorem.txt');
// 폴더 부정확하면 err
fs.writeFile(writePath, 'data 쓰기', err=>{
    console.log(err)
    console.log("1. write")
});