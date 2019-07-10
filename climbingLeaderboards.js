function climbingLeaderboard(scores, alice) {
    // we know the leaderboard array will be ordered
    // let us create a new array of unique values to know what score is what ranking
    let runner = 0;
    let uniqueScores = [];
    if (scores[0]) {
        uniqueScores[0] = scores[0];
    }
    for (let score = 1; score < scores.length; score++) {
        if (scores[score] !== uniqueScores[runner]) {
            ++runner;
            uniqueScores[runner] = scores[score];
        }
    }
    
    // now iterate through alices scores / updating our uniqueScores arr / adding to alicesRanks arr
    let rank = 1;
    let alicesRanks = [];
    for (let score in alice) {
        while (alice[score] < uniqueScores[rank - 1]) {
            ++rank;
        }
        alicesRanks.push(rank);
        //update uniqueScores arr
        rank = 1;
    }

    return alicesRanks;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[25, 5, 25, 50, 100]));
