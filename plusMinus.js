'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    var posCount = 0;
    var negCount = 0;
    var zerosCount = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            ++posCount;
        } else if (arr[i] < 0) {
            ++negCount;
        } else {
            ++zerosCount;
        }
    }
    console.log((posCount / arr.length).toFixed(6));
    console.log((negCount / arr.length).toFixed(6));
    console.log((zerosCount / arr.length).toFixed(6));
    return;
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
