package com;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.mdf.enjoylove")
public class UeditorTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(UeditorTestApplication.class, args);
	}
}
