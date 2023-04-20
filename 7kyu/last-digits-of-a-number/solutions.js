function lastDigit(n, d) {
    return d <= 0 ? [] : [...String(n).slice(-d)].map(x => +x)
  }