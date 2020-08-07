const cat = require('./cat.js');
const pwd = require('./pwd.js');
const ls = require('./ls.js');
const curl = require('./curl.js')

process.stdout.write('prompt>');

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    const command = input.split(' ')[0];
    const arg = input.split(' ')[1];
    if(command === "cat") {
        cat(arg);
    }
    if(command === "pwd") {
        pwd();
    }
    if(command === "ls") {
        ls();
    }
    if(command === "curl") {
        curl(arg);
    }
});