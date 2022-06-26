const fs = require('fs');
const path = require('path');

//Create folder
//err => same as function(err)
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created...');
});

//Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello World!', err => {
    if(err) throw err;
    console.log('File written to...');

    //File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'nodeJs', err => {
        if(err) throw err;
        console.log('File written to...');
    });
});

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

//Rename
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello.txt') , err => {
    if(err) throw err;
    console.log('File renamed...');
});

