String.prototype.toJadenCase = function () {
  const hasil = [];
  this.split(' ').forEach((el) => {
    hasil.push(el.substring(0, 1).toUpperCase() + el.substring(1).toLowerCase());
  });
  return hasil.join(' ');
};

console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
