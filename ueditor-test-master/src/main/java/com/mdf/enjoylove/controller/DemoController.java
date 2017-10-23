package com.mdf.enjoylove.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.mdf.enjoylove.entity.User;
import com.mdf.enjoylove.service.UserService;

@Controller
public class DemoController {
	@Autowired
    private UserService userservice;

	@RequestMapping("/demo")
    public String demo(Model model) {
    	User user = userservice.find();
        model.addAttribute("title", "Demo 示例。");
        model.addAttribute("user",user);
        return "demo";
    }
	
	@RequestMapping("/index")
    public String index(Model model) {
        return "index";
    }

}
