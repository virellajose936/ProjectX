function printPattern(n) {
  let pattern = '';

  for (let i = 0; i < n; i++) {
    if ((i % 2 === 0 && i > 1) || (n - 1 - i) % 2 === 1) {
      pattern += '*';
    } else {
      pattern += ' ';
    }
  }

  console.log(pattern);
}

printPattern(5);
