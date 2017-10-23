package com.mdf.enjoylove.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mdf.enjoylove.entity.User;
import com.mdf.enjoylove.mapper.UserMapper;

@Service
public class UserService {
	@Autowired
    private UserMapper  usermapper;
	
	public User find(){
		return usermapper.find();
	}
	
}
