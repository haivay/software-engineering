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
    cords = lines[0].split(" ");
    x = +cords[0];
    y = +cords[1];
    res = 0;
    count = 0;

    if (x == y) {
        res = 0;
    } else {
        if (y > x) {
            [x,y] = [y,x]
        }
        if (y > 0) {
            if ((x - y) > 10) {
                count = Math.ceil((x - y) / 10);
                res = --count;
                res++;
            } else if ((x - y) == 10) {
                count = Math.floor(y/10);
                res += count;
            } else if ((x - y) < 10) {
                res = 1;
            }
        } else {
            if (Math.abs(y - x) > 10 && ((y-x) % 10 != 0)) {
                count = Math.ceil((y - x) / 10);
                res += -count;
                res++;
            } else if ((y - x) % 10 == 0) {
                count = Math.floor((y-x)/10);
                res += -count;
            } else if ((y - x) < 10) {
                res = 1;
            }
        }
    }
    console.log(res);
});