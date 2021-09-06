function highAndLow(numbers) {
  // ...
  const angka = numbers.split(' ');
  return Math.max(...angka) + ' ' + Math.min(...angka);
}

//! GG Coding
function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
