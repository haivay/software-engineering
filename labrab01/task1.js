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
    let result = lines[0]
        .split(" ")
        .map (x => +x)
        .filter(x => x % 2 == 0)
    result = result[0];
    console.log(result);
});