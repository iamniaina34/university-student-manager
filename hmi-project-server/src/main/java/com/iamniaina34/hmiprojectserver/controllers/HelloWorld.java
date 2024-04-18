package com.iamniaina34.hmiprojectserver.controllers;

import com.iamniaina34.hmiprojectserver.models.Personne;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.Month;
import java.util.Date;

@RestController
public class HelloWorld {

    @GetMapping(path = "/hello")
    public String sayHello() {
        return "Hello Niaina";
    }

    @GetMapping(path = "/personne")
    public Personne giveSomething() {
        Personne personne = new Personne(
            "ANDRIANIAINA",
            "Mandrindra",
            LocalDate.of(2004, Month.FEBRUARY, 20),
            "Ambohimahasoa",
            "206011016997",
            LocalDate.of(2022, Month.FEBRUARY, 20),
            "Fianarantsoa");
        return personne;
    }
}
