var encryptThis = function (text) {
  // Implement me! :)
  const hasil = [];
  const coba = text
    .split(' ')
    .forEach((el) => hasil.push(el.substring(0, 1).charCodeAt(0) + el.replace(/(\w{1})(\w{1})(\w+)?(\w$)/, '$1$4$3$2').substring(1)));
  return hasil.join(' ');
};
console.log(encryptThis('A wise old owl lived in an oak'));

// Todo GG koding 6kyu
const encrypt = (text) =>
  text
    .split(' ')
    .map((word) => word.replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`).replace(/^\w/, word.charCodeAt(0)))
    .join(' ');
console.log(encrypt('A wise old owl lived in an oak'));
