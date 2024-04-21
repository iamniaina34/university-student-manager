package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.AnneUniversitaire;
import com.iamniaina34.studentmanagerserver.services.AnneeUniversitaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/anneeUniversitaire")
public class AnneeUniversitaireController {

    @Autowired
    private AnneeUniversitaireService anneeUniversitaireService;

    @GetMapping({"/", "index", "anneeUniversitaires"})
    public List<AnneUniversitaire> getAllAnneeUniversitaires() {
        return anneeUniversitaireService.getAllAnneeUniversitaires();
    }

}
