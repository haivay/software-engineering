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
    n = lines[0];
    arr = [];
    for(i = 1; i <= n; i++){
        arr.push(lines[i])
    }
    console.log(arr
        .map(x => +x)
        .filter(x => x % 10 == 3)
        .sort((a, b) => a - b)
        [0]
    );
});