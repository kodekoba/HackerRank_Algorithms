'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// could write this as a for loop but that would cause the function to be O(n) instead of O(1)
function compareTriplets(a, b) {
    let acount = 0;
    let bcount = 0;
    if (a[0] > b[0]) {
        acount += 1;
    }
    if (a[0] < b[0]) {
        bcount += 1;
    }
    if (a[1] > b[1]) {
        acount += 1;
    }
    if (a[1] < b[1]) {
        bcount += 1;
    }
    if (a[2] > b[2]) {
        acount += 1;
    }
    if (a[2] < b[2]) {
        bcount += 1;
    }
    return [acount, bcount];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
