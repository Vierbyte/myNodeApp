const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]) 
    let strang = buf.toString();
    let strangArray = strang.split('\n');

    console.log(strangArray.length - 1)
    
    

