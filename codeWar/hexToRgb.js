// Todo; 5Kyu
function hexStringToRGB(hexString) {
  const convert = hexString
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
  return { r: convert[0], g: convert[1], b: convert[2] };
}

const hexToRGB = (h) => {
  return {
    r: parseInt(h.slice(1, 3), 16),
    g: parseInt(h.slice(3, 5), 16),
    b: parseInt(h.slice(5, 7), 16),
  };
};

console.log(hexToRGB('#FF9933'));
console.log(hexStringToRGB('#FF9933'));
