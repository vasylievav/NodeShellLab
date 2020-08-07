const pwd_func = require('./pwd.js')
const ls_func = require('./ls.js')
const cat = require('./cat.js')

process.stdin.on('data', (data) => {
    const input =data.toString().trim();
    const command =input.split(' ')[0];
    const filename =input.split(' ')[1]; )

process.stdout.write('prompt>');

pwd_func();
ls_func();
cat(filename);

// process.stdin.on('data',(data)=>{
// const cmd=data.toString().trim();
// if((cmd !== 'pwd') && (cmd !== 'ls')&& (cmd !=='cat')) {
//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
//     }
// });
