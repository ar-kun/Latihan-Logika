function wordSplitter(string) {
  //your code here
  return string.split(/[~!@#$%^&*_+=|':;?/><]/);
}

// gg coding regex
//! [^\w.-]
console.log(wordSplitter('11:11:11:11:11'));
