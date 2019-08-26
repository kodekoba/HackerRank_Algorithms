const saveThePrisoner = (n, m, s) => {
    if (s + m - 1 <= n) {
        return s + m - 1
    } else {
        m -= (n - s + 1)
        return (m % n === 0 ? n : m % n)
    }
}

console.log(saveThePrisoner(3,7,3))