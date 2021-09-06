function vaporcode(string) {
  return string.replace(/\s/g, '').split('').join(' ').toUpperCase();
}

console.log(vaporcode("Let's go to the moviesLets go to the movies"));
