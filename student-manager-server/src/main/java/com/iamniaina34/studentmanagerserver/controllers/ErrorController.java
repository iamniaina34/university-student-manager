package com.iamniaina34.studentmanagerserver.controllers;

import jakarta.websocket.OnError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorController {

    @GetMapping("/error")
    public String showErrorLog() {return "PAGE NOT FOUND";}

}
