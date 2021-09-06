function check(a, x) {
  // your code here
  const result = a.filter((el) => el == x);
  return result.length > 0 ? true : false;
}

// Todo GG Koding { Arraw functions}

const check = (a, x) => a.includes(x);
console.log(check([101, 45, 75, 105, 99, 107], 17));
