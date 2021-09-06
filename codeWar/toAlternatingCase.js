String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split('')
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
};
