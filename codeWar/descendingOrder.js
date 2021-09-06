function descendingOrder(n) {
  let angka = n.toString();
  return Number.parseInt(
    angka
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

//! gg Coding
function descendingOrder(n) {
  return parseInt(n.toString().split('').sort().reverse().join(''));
}
console.log(descendingOrder(0));
