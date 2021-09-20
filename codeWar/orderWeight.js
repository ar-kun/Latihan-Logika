function orderWeight(strng) {
  return strng.split(' ').sort().join(' ');
}
console.log(orderWeight('103 123 4444 99 2000'));
