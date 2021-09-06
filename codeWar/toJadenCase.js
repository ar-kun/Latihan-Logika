String.prototype.toJadenCase = function () {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toUpperCase();
  }
  return this.toLowerCase().replace(/[a-z]/, upperToHyphenLower);
};
