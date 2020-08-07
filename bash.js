const cat = require('./cat.js');
const pwd = require('./pwd.js');
const ls = require('./ls.js');
const curl = require('./curl.js')

process.stdout.write('prompt>');
const done =(output)=>{
    process.stdout.write(output);
    process.stdout.write('\nprompt >');
}

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    const command = input.split(' ')[0];
    const arg = input.split(' ')[1];
    if(command === "cat") {
        cat(arg,done);
    }
    if(command === "pwd") {
        pwd(done);
    }
    if(command === "ls") {
        ls(done);
    }
    if(command === "curl") {
        curl(arg,done);
    }
});

