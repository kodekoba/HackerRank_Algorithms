'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}
//                p   n
// [0,1] [2,3] [4,5] [6,7]
function pageCount(n, p) {
    let forward;
    let backward;
    if (n % 2 == 0) {
        n = n + 1;
    }
    if (p % 2 === 1) {
        forward = Math.floor(p / 2);
        backward = Math.floor((n - p) / 2);
    } else {
        forward = Math.floor(p / 2);
        backward = Math.floor((n - p) / 2); 
    }
    return Math.min(forward, backward);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
