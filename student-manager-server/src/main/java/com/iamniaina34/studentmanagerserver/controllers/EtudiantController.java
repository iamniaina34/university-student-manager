package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Etudiant;
import com.iamniaina34.studentmanagerserver.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping ("/etudiant")
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;


    @GetMapping (path = "/")
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

}
