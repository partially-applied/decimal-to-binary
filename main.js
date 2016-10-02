var decToBin;
decToBin = function(dec){
  var bin, rem;
  bin = [];
  for (;;) {
    if (dec <= 1) {
      bin.push(dec);
      break;
    }
    rem = dec % 2;
    bin.push(rem);
    if (rem === 0) {
      dec = dec / 2;
    } else {
      dec = (dec - 1) / 2;
    }
  }
  return bin.reverse();
};
module.exports = decToBin;