function fibonacciGenerator(n) {
    var result = [0];

    if (n === 1) {
        return result;
    }

    result.push(1);
    for (let index = 2; index < n; index++) {
        result.push(result[index - 1] + result[index - 2]);
    }
    return result;
}

console.log(fibonacciGenerator(3));