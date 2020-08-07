module.exports=function(){
    const fs =require('fs');
    // process.stdin.on('data', (data) => {
    //     const input =data.toString().trim();
    //     const command =input.split(' ')[0];
    //     const file =input.split(' ')[1];
        
        const path ="./"+file;
       
        if (command==='cat'){
            fs.readFile(path, 'utf8',(err,file)=>{
                if(err) {
                    throw err
                }
                else {
                    
                    process.stdout.write(file);
                    process.stdout.write('\nprompt >');
                }

            }

            )

        } 
    } )
}