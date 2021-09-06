function generateRange(min, max, step) {
  const hasil = [];
  for (let i = min; i <= max; i += step) {
    hasil.push(i);
  }
  return hasil;
}

console.log(generateRange(2, 10, 2));
