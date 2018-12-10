package cn.com.weekpark.utils;

import java.util.UUID;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

public class AESCBCUtils {

	static String PASS = "abcdef0123456789";

    private static final String KEY_ALGORITHM = "AES";
   
    //参数分别代表 算法名称/加密模式/数据填充方式
	private static final String DEFAULT_CIPHER_ALGORITHM = "AES/CBC/NOPadding";
	
    public static void main(String args[]) throws Exception {
    	String str = "测试用的数据";
    	String res = encryptAES(str, PASS);
    	System.out.println("加密前："+str);
    	System.out.println("加密后："+res);
        System.out.println("解密后："+decryptAES(res, PASS));
        System.out.println("解密后2："+decryptAES("32A432E48464F48261056BF689F313E4", PASS));
    }

    public static String generatePass() {
    	String pass = UUID.randomUUID().toString().replaceAll("-", "").substring(0, 16);
    	return pass;
    }
    
    public static String encryptAES(String data, String pass) throws Exception {
        try {
            Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);   
            int blockSize = cipher.getBlockSize();
            byte[] dataBytes = data.getBytes();
            int plaintextLength = dataBytes.length;
            if (plaintextLength % blockSize != 0) {
                plaintextLength = plaintextLength + (blockSize - (plaintextLength % blockSize));
            }
            byte[] plaintext = new byte[plaintextLength];
            System.arraycopy(dataBytes, 0, plaintext, 0, dataBytes.length);
            SecretKeySpec keyspec = new SecretKeySpec(PASS.getBytes(), KEY_ALGORITHM);
            IvParameterSpec ivspec = new IvParameterSpec(PASS.getBytes());
            cipher.init(Cipher.ENCRYPT_MODE, keyspec, ivspec);
            return Base64.encodeBase64String(cipher.doFinal(plaintext));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String decryptAES(String data, String pass) throws Exception {
        try {
            Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);
            SecretKeySpec keyspec = new SecretKeySpec(PASS.getBytes(), KEY_ALGORITHM);
            IvParameterSpec ivspec = new IvParameterSpec(PASS.getBytes());
            cipher.init(Cipher.DECRYPT_MODE, keyspec, ivspec);
            byte[] result = cipher.doFinal(Base64.decodeBase64(data.getBytes()));
            return new String(result, "utf-8");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
