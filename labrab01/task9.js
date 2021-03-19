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
    for(i = 1; i <= 20; i++){
        arr.push(lines[i])
    }
    console.log(arr
        .map(x => x.split(';'))
        .sort((a, b) => +b[1] - +a[1])[n-1][0]
    );
});