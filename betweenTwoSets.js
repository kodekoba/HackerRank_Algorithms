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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // find greatest common denominator of array b
    function greatestCommonDenominator(arr) {
        if (arr.length == 1) {
            return arr[0];
        }
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[arr.length - 1] == 0) {
                return arr[arr.length - 2];
            } else if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                return greatestCommonDenominator(arr);
            } else if (arr[i] > 0 && arr[i + 1] >= arr[i]) {
                arr[i + 1] = arr[i + 1] % arr[i];
                return greatestCommonDenominator(arr);
            }
        }
    }
    let gcd = greatestCommonDenominator(b);

    // find least common multiple of array a
    function leastCommonMultiple(arr) {
        if (arr.length == 1) {
            return arr[0];
        }
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i + 1] = (arr[i] * arr[i + 1]) / (greatestCommonDenominator([arr[i], arr[i + 1]]));
        }
        return arr[arr.length - 1];
    }
    let lcm = leastCommonMultiple(a);

    //
    var count = 0;
    let multiplier = 1;
    while (gcd >= (lcm * multiplier)) {
        if (gcd % (lcm * multiplier) == 0) {
            ++count;
        }
        ++multiplier;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
