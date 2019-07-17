const countingValleys = (n, s) => {
    if (n === 0) {
        return 0;
    }
    let height = 0;
    let count = 0;
    let inValley = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "D") {
            height--;
        } else if (s[i] === "U"){
            height++;
            if (height === 0 && inValley === true) {
                count++;
                inValley = false;
            }
        }
        if (height < 0) {
            inValley = true;
        }

    }
    return count;
}
