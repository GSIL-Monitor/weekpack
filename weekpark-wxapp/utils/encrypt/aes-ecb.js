var CryptoJS = require('./ecb/crypto-js.js');  //引用AES源码js
var key = CryptoJS.enc.Utf8.parse("abcdef0123456789"); //十六位十六进制数作为秘钥

function Encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

function Decrypt(word) {
  var decrypt = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

module.exports = {
  encrypt: Encrypt,
  decrypt: Decrypt
}