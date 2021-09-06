//! Barbar koding
function multiple(x) {
  // Good Luck
  if (Number.isInteger(x / 3) && Number.isInteger(x / 5)) {
    return 'BangBoom';
  } else if (Number.isInteger(x / 5)) {
    return 'Boom';
  } else if (Number.isInteger(x / 3)) {
    return 'Bang';
  } else {
    return 'Miss';
  }
}

//! GG Coding
function multiple(x) {
  return x % 15 == 0 ? 'BangBoom' : x % 3 == 0 ? 'Bang' : x % 5 == 0 ? 'Boom' : 'Miss';
}
console.log(multiple(65));
