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
    arr = lines[0].split(" ");
    m = +arr[0];
    n = +arr[1];
    res1 = 0;
    res2 = 0;

    if (n > m) {
        res1 = n / m + 1;
        res1 = Math.floor(res1);
        res2 = n - (res1-1) * m;
    } else if(n < m) {
        res1 = 1;
        res2 = n;
    } else if (n == 1){
        res1 = 1;
        res2 = n;
    } else if (m == n) {
        res1 = n / m;
        res2 = m;
    } 
    if (res2 == 0) {
        res1--;
        res2 = m;
    }
    console.log(res1, res2);
});