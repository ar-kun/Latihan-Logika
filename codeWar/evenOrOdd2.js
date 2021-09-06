//! GG koding
function evenOrOdd(str) {
  let odd = str
    .split('')
    .filter((el) => el % 2 != 0)
    .reduce((a, b) => a + b);
  let even = str
    .split('')
    .filter((e) => e % 2 == 0)
    .reduce((a, b) => a + b);
  if (even > odd) {
    return 'Even is greater than Odd';
  } else if (even < odd) {
    return 'Odd is greater than Even';
  } else {
    return 'Even and Odd are the same';
  }
}

// ! Barbar Koding
function evenOrOdd(str) {
  let coba = [];
  let coba2 = [];
  str.split('').forEach((el) => {
    if (el % 2 === 0) {
      coba.push(Number.parseInt(el));
    } else {
      coba2.push(Number.parseInt(el));
    }
  });
  if (coba.reduce((acc, curr) => acc + curr) < coba2.reduce((acc, curr) => acc + curr)) {
    return 'Odd is greater than Even';
  } else if (coba.reduce((acc, curr) => acc + curr) > coba2.reduce((acc, curr) => acc + curr)) {
    return 'Even is greater than Odd';
  } else {
    return 'Even and Odd are the same';
  }
}

console.log(evenOrOdd('112'));
