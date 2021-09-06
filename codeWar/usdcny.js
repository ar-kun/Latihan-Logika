function usdcny(usd) {
  const convert = (usd * 675).toString().split('');
  convert.splice(-2, 0, '.');
  return `${convert.join('')} Chinese Yuan`;
}
// todo gg koding Arraw functions
const usdcnyDua = ($) => `${($ * 6.75).toFixed(2)} Chinese Yuan`;
console.log(usdcnyDua(450));
console.log(usdcny(450));
