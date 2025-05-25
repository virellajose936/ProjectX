// Define a Node.js module that contains a function to calculate Fibonacci numbers.
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Example usage: Calculate the first 10 Fibonacci numbers.
console.log(fibonacci(10));
