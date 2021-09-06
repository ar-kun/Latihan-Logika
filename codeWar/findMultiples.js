function findMultiples(integer, limit) {
  //your code here
  let coba = [];
  for (let i = integer; i <= limit; i += integer) {
    coba.push(i);
  }
  return coba;
}

console.log(findMultiples(5, 7));
