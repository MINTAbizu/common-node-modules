// const os= require('os')

// // console.log(os)

// //to acess free memoryof ram
// const freememory=os.freemem()
// console.log("free memory "+freememory)

// // totalmem
// const totalmem=os.totalmem()
// console.log("total memeory "+totalmem)

// //to acess computer operating system

// const platform=os.platform()
// console.log("operating system "+platform)

// // path module

// const path=require("path")
// // console.log(path)
// // console.log("__filename")
// // console.log("__dirname")

// const pathobj=path.parse("__filename")
// console.log(pathobj)



// // file system

// const fs=require('fs')

// fs.readFile("./minta.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.mkdir("makefolder",(err,path)=>{
//     if(err){

//     }
//     console.log(path)
// })

// fs.readdir("./",(err,file)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(file)
// })
// fs.writeFile("./minte2.txt","heloo",(err,file)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(file)
        

// })
// fs.writeFile("./style.css","",(err,file)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(file)
// })

// event
const events=require("events")
const eventemiter=new events.EventEmitter();

function myeventemiter(){
    console.log("yes boss")
} 

eventemiter.on("abebe",myeventemiter)

eventemiter.emit("abebe")