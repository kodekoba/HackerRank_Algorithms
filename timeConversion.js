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

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let militaryhour = parseInt(s.substring(0, 2));
    // 12 for am and pm
    if (s.substring(0, 2) == "12" && s.substring(8, 9) == "A") {
        militaryhour = 0;
    } else if (s.substring(0, 2) == "12" && s.substring(8, 9) == "P") {
        militaryhour = 12;
    } else if (s.substring(8, 9) == "P") {
        militaryhour += 12;
    }
    if (militaryhour < 10) {
        return "0" + militaryhour.toString() + s.substring(2, 8);
    }
    return militaryhour.toString() + s.substring(2, 8);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
