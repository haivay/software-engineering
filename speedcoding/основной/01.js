var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
    res = lines[0].split('');
    num = res.slice(1, res.length-1).join("");
    console.log(num);
});