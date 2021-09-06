// ! Barbar koding
function sum(digits) {
  if (typeof digits === 'number') {
    digits = digits.toString();
  }
  if (digits && digits >= 0) {
    const satu = digits.split('').join(' + ');
    const dua = digits
      .split('')
      .map((el) => Number.parseInt(el))
      .reduce((ele, cur) => ele + cur);
    return `${satu} = ${dua}`;
  } else {
    return '';
  }
}

//! GG Koding
function sum(digits) {
  try {
    const ds = digits
      .toString()
      .split('')
      .map((x) => parseInt(x));
    return `${ds.join(' + ')} = ${ds.reduce((a, b) => a + b)}`;
  } catch (e) {
    return '';
  }
}

console.log(sum('3433'));
