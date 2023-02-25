const  fs = require('fs')
const process = require('process')
const axios = require('axios')

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log("ERROR:", err)
            process.kill(1)
        }
        else{
            // success
            console.log("DATA...", data)
        }
    })
}

async function webCat(url){
    try{
        res = await axios.get(url)
        console.log(res.data)
    }catch (err){
        console.log("ERROR:", err)
        process.kill(1)
    }
}

let path = process.argv[2]
let writeTo = process.argv[3]
let content = process.argv[4]

if (path.slice(0,4) === 'http'){
    webCat(path) 
} else if (path === '--out'){
    fs.writeFile(writeTo, content, 'utf8', err => {
        if(err){
            console.log("ERROR:", err)
            process.kill(1)
        } else {
            console.log("SUCCESS")
        }
    })
} else {
    cat(path)
}

