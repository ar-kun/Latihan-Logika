function vowelChange(str, vow) {
  return str.replace(/[aiueo]/gi, vow);
}
// i = case sensitif || g = Global / smua nya
console.log(vowelChange('hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!', 'i'));
