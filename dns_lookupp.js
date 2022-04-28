// dns is a core module of Node which has methods such as lookup() which can be used to look up the ip address of a Domain.
const whatYoIp = require('dns')
// readline module provides an interface to read data from a readable stream such as process.stdin
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Domain Name: ", function(url) {
    readline.close();
    whatYoIp.lookup(url, function(err, answer) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log("IP Address: ", answer)
    })
})