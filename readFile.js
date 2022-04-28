const fileSystem = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('filename: ', function(filename) {
    readline.close();
    fileSystem.readFile(filename, function(err, buffer) {
        if (err) {
            console.log(err.message);
            return;
        }
        const content = buffer.toString();
        const upper = content.toUpperCase();
        console.log(upper);
    })
})
