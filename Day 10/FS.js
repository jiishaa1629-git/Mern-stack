let fs=require('fs')

if(!fs.existsSync("./documents")){
fs.mkdir("./documents",(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("folder created succefully");
    }
});
}

fs.writeFile('./documents/hello.txt',"hello hello hello....",(err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("file created successfully!!");
    }
});
fs.readFile("./documents/hello.txt",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
});
