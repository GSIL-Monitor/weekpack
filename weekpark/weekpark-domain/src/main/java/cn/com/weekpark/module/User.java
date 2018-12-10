package cn.com.weekpark.module;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

/**
 * 
* ClassName：User
* Todo：TODO
* Author：Jonas
* Date：2018年11月15日 
* Time：下午5:47:05
 */

@Data // 自动生成：getter、setter、构造器、toString()、equals()
@Entity
@Table(name="user")
public class User extends Entitys implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false, unique = true)
	private String userName;
	@Column(nullable = false)
	private String passWord;
	@Column(nullable = false, unique = true)
	private String email;	
	@Column(nullable = true)
	private String profilePicture;
	@Column(nullable = true,length = 65535,columnDefinition="Text")
	private String introduction;
	@Column(nullable = false)
	private Long createTime;
	@Column(nullable = false)
	private Long lastModifyTime;
	@Column(nullable = true)
	private String outDate;
	@Column(nullable = false)
	private Integer status=0;

	public User() {
		super();
	}

	public User(Long id, String userName, String email, Long createTime, Integer status) {
		super();
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.createTime = createTime;
		this.status = status;
	}
}
