package com.iamniaina34.studentmanagerserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @GetMapping(path = "/helloWorld")
    public String helloWorld() {return "helloWorld";}

}
