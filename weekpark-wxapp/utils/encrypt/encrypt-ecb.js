var encrypt = require('/aes-ecb.js');  //引用AES源码js

function test(word) {
  console.log("加密前：" + word);
  var encryptStr = encrypt.encrypt(word);
  console.log("加密后：" + encryptStr);
  console.log("解密后：" + encrypt.decrypt(encryptStr));
  console.log("解密后2：" + encrypt.decrypt('pdlYizdfuV/LfLnXJHpIGg=='));
}

module.exports = {
  test: test
}

