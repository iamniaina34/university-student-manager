package com.iamniaina34.studentmanagerserver;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.net.InetAddress;
import java.net.UnknownHostException;

@SpringBootApplication
public class StudentManagerServerApplication {

	@Value("${server.port}")
	private String serverPort;

	public static void main(String[] args) {
		SpringApplication.run(StudentManagerServerApplication.class, args);
	}

	@Bean
	public int setServerAddress() {
		try {
			InetAddress inetAddress = InetAddress.getLocalHost();
			String serverAddress = inetAddress.getHostAddress();
			System.setProperty("server.address", serverAddress);
			System.out.println("Server address set to: " + serverAddress);
		} catch (UnknownHostException e) {
			System.err.println("Error obtaining server address: " + e.getMessage());
		}
		return 0;
	}
}
