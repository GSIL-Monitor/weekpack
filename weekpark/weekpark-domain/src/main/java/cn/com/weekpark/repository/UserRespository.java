package cn.com.weekpark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cn.com.weekpark.module.User;

public interface UserRespository extends JpaRepository<User, Long>{
	User findByUserName(String userName);
}
