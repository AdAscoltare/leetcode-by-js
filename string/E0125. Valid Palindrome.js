/**
 * @param {string} s
 * @return {boolean}
 */
//笨办法 聪明人都用正则一波带走
/*
var isPalindrome = function (s) {
  if (!s) {
    return true;
  }
  s = s.toLowerCase();
  var r = s.length - 1;
  var l = 0;
  while (l < r) {
    while (true) {
      if (l >= r) return true;
      if ((s[l] >= "a" && s[l] <= "z") || (s[l] >= "0" && s[l] <= "9")) {
        break;
      }
      l++;
    }
    while (true) {
      if (l >= r) return true;
      if ((s[r] >= "a" && s[r] <= "z") || (s[r] >= "0" && s[r] <= "9")) {
        break;
      }
      r--;
    }
    if (l >= r) return true;
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};*/
//正则
var isPalindrome = function (s) {
  if (!s) {
    return true;
  }
  let regex = /[^A-Za-z0-9]/g;
  s = s.replace(regex, "").toLowerCase();
  var l = s.length - 1;
  for (var i = 0; i < (l + 1) / 2; i++) {
    if (s[i] != s[l - i]) {
      return false;
    }
  }
  return true;
};
