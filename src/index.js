module.exports = function makeExchange(currency) {
  var result = {};
  const H = 50;
  const Q = 25;
  const D = 10;
  const N = 5;
  const P = 1;
  var countH = 0;
  var countQ = 0;
  var countD = 0;
  var countN = 0;
  var countP = 0;

  if (currency >= 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }
  if (currency <= 0) {
    return {};
  }

  countH = Math.floor(currency / H); // 50
  currency -= countH * H;
  if (countH) {
    result.H = countH;
  }

  countQ = Math.floor((currency % H) / Q); // 25
  currency -= countQ * Q;
  if (countQ) {
    result.Q = countQ;
  }

  countD = Math.floor((currency % Q) / D); // 10
  currency -= countD * D;
  if (countD) {
    result.D = countD;
  }

  countN = Math.floor((currency % D) / N); // 5
  currency -= countN * N;
  if (countN) {
    result.N = countN;
  }

  countP = Math.floor((currency % N) / P); // 1
  if (countP) {
    result.P = countP;
  }
  return result;
}
