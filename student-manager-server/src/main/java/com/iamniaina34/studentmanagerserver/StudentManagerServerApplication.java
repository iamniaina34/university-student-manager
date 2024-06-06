package com.iamniaina34.studentmanagerserver;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.net.InetAddress;
import java.net.UnknownHostException;

@SpringBootApplication
public class StudentManagerServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentManagerServerApplication.class, args);
	}
}
