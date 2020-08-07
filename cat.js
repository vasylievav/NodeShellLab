module.exports = function (fileName){
    const fs = require('fs');
    const path ="./"+fileName;
        fs.readFile(path, 'utf8',(err,file)=>{
            if(err) {
                throw err
            }
            else {
                process.stdout.write(file);
                process.stdout.write('\nprompt >');
        }
    })
}