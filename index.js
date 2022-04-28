console.log("Hello World I am in Node.")
const cowsay = require("./cowsay-practice/node_modules/cowsay");

console.log(cowsay.say({
    text: "Hello World I am Mooer",
    e: "^^",
    T: "V"
}))