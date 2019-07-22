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

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

const pickingNumbers = (arr) => {
    arr.sort((a, b) => {
        return a - b
    });
    if (arr[0] === undefined) {
        return 0;
    }
    let newNumber = false;
    let count = 1, max = 0;
    let i = 0, j = 1;
    while (j < arr.length) {
        if ((arr[j] - arr[i]) === 0) {
            ++count;
            ++j;
        } else if ((arr[j] - arr[i]) === 1 && newNumber === false) {
            newNumber = true;
            ++count;
            i = j;
            ++j;
        } else {
            newNumber = false;
            count = 1;
            i = j;
            ++j;
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
