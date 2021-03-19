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
    console.log(lines[0]
        .split(" ")
        .map(x => +x)
        .sort((a, b) => a - b)
        .reduce((acc, next) => acc - next, 5050) //сумма чисел от 1 до 100 = 5050
    );
});