package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Professeur;
import com.iamniaina34.studentmanagerserver.services.ProfesseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/professeurs")
public class ProfesseurController {

    @Autowired
    private ProfesseurService professeurService;

    @GetMapping({"", "/", "/index"})
    public List<Professeur> getAllProfesseurs() {
        return professeurService.getAllProfesseurs();
    }

    @GetMapping("/{id}")
    public Professeur getProfesseurById(@PathVariable Integer id) {
        return professeurService.getProfesseurById(id);
    }

    @PostMapping("/create")
    public Professeur createProfesseur(@RequestBody Professeur professeur) {
        return professeurService.createProfesseur(professeur);
    }

    @PutMapping("/update/{id}")
    public Professeur updateProfesseur(@PathVariable Integer id, @RequestBody Professeur professeur) {
        return professeurService.updateProfesseur(id, professeur);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProfesseur(@PathVariable Integer id) {
        professeurService.deleteProfesseur(id);
    }
}
