package cn.com.weekpark.web.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cxytiandi.encrypt.anno.Decrypt;
import com.cxytiandi.encrypt.anno.Encrypt;

@RestController
public class EncryptController {

	@Value("${spring.encrypt.key}")
	private String encryptKey;
	
	@Encrypt
	@PostMapping("/encrypt")
	public String encrypt(String str) {
		return str;
	}
	
	@Decrypt
	@PostMapping("/decrypt")
	public String test( String str) {
		System.out.println(str);
		return str;
	}
}
