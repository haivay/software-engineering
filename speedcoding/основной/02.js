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
    arr = lines[0].split(" ").sort((a,b) => (a-b));
    res = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i+1]) res++;
    }
    console.log(res);
});