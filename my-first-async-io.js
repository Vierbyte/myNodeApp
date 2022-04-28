const fs = require('fs');

fs.readFile(process.argv[2], function(err, buf) {
    if (!err) {
    let strang = buf.toString();
    let strangArray = strang.split('\n');

    console.log(strangArray.length - 1)
    }
    
})
