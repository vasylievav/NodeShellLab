const pwd_func = require('./pwd.js')
const ls_func = require('./ls.js')


process.stdout.write('prompt>');

pwd_func();
ls_func();

process.stdin.on('data',(data)=>{
const cmd=data.toString().trim();
if((cmd !== 'pwd') && (cmd !== 'ls')) {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
});
