package cn.com.weekpark.web.controller;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cxytiandi.encrypt.anno.Decrypt;
import com.cxytiandi.encrypt.anno.Encrypt;

import cn.com.weekpark.module.User;
import cn.com.weekpark.service.UserService;
import net.sf.json.JSONObject;

@RestController
@RequestMapping("/user")
public class UserController {

	@Value("${spring.encrypt.key}")
	private String encryptKey;
	
	@Autowired
	private UserService userService;
	
	@Encrypt
	@GetMapping("/{userId}")
	public Object getUser(@PathParam("userId") Integer userId) {
		User user =  new User(1l, "tet", "test@teat.com", System.currentTimeMillis(),0);//userService.getUserByName(userName);
		
		JSONObject result = new JSONObject();
		try {
			result.accumulate("data", user.getUserName());
			result.accumulate("code", 200);
			result.accumulate("msg", "success");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@Encrypt
	@PostMapping("/encrypt")
	public Object save(@RequestBody User user) {
		JSONObject result = new JSONObject();
		result.accumulate("data", user);
		result.accumulate("code", 200);
		result.accumulate("msg", "success");
		return result;
	}
}
