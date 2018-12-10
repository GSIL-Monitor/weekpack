var CryptoJS = require('/aes-cbc.js');  //引用AES源码js
var key = CryptoJS.enc.Utf8.parse("abcdef0123456789"); //十六位十六进制数作为秘钥
var iv = CryptoJS.enc.Utf8.parse("weekpark");

/**
 * @example
 * var CryptoJS = require('./../../../util/aes.js')
 * var key = CryptoJS.enc.Utf8.parse("key");
 * var iv = CryptoJS.enc.Utf8.parse("iv");
 * var pwd = CryptoJS.encrypt(this.data.pwdVal, key, iv)
 * var original = CryptoJS.encrypt(pwd, key, iv)
 */
function encryptCBC(word){
  return CryptoJS.encrypt(word, key, iv);
}

function decryptCBC(word){
  return CryptoJS.decrypt(word,key, iv);
}

function test(word){
  console.log("加密前：" + word);
  var encryptStr = encryptCBC(word);
  console.log("加密后：" + encryptStr);
  console.log("解密后：" + decryptCBC(encryptStr));
}

module.exports = {
  test: test,
  encrypt: encryptCBC,
  decrypt: decryptCBC
}