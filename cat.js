module.exports = function (fileName,done){
    const fs = require('fs');
    const path ="./"+fileName;
        fs.readFile(path, 'utf8',(err,file)=>{
            if(err) {
                throw err
            }
            else {
                done(file);
                
        }
    })
}