const viralAdvertising = (n) => {
    if (n === 0) return 0
    let res = 0
    let recip = 5
    for (let i = 0; i < n; i++) {
        let sharers = Math.floor(recip / 2)
        res += sharers
        recip = sharers * 3
    }
    return res
}
