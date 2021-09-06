function arrayDiff(a, b) {
  //Mengembalikan nilai yg true saja
  return a.filter((el) => !b.includes(el));

  //   filter yg index of nya ada klau index of ny -1 kembalikan
  //   return a.filter(x=>b.indexOf(x));
}
console.log(arrayDiff([1, 2, 3], [1, 2]));
