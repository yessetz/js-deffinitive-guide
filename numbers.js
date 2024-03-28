// for avoiding issue with rounding floating numbers use integer instead of fractions (cents, points, etc.)
console.log(.3 - .2);
console.log(.2 - .1);

// BigInt
console.log(Number.MAX_SAFE_INTEGER);
console.log(BigInt(Number.MAX_SAFE_INTEGER));