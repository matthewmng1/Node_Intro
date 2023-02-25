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
cat(process.argv[2])