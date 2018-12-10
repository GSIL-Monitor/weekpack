package cn.com.weekpark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cxytiandi.encrypt.anno.EnableEncrypt;

@EnableEncrypt
@SpringBootApplication
public class WeekparkWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeekparkWebApplication.class, args);
	}
}
