/**  
* @Title: UserImpl.java
* @Package cn.com.weekpark.service.impl
* @Description: TODO(用一句话描述该文件做什么)
* @author Administrator  
* @date 2018年11月15日 下午5:06:39
* @version V1.0  
*/ 
package cn.com.weekpark.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.com.weekpark.module.User;
import cn.com.weekpark.repository.UserRespository;
import cn.com.weekpark.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRespository userDao;

	@Override
	public User getUserByName(String userName) {
		return userDao.findByUserName(userName);
	}
	
}
