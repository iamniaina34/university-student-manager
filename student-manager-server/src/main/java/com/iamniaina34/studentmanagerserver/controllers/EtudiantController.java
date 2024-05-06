package com.iamniaina34.studentmanagerserver.controllers;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.iamniaina34.studentmanagerserver.models.Etudiant;
import com.iamniaina34.studentmanagerserver.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/etudiants")
public class EtudiantController {

    private final EtudiantService etudiantService;

    @Autowired
    public EtudiantController(EtudiantService etudiantService) {
        this.etudiantService = etudiantService;
    }

    @GetMapping({"", "/", "/index"})
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @GetMapping("/{numeroMatricule}")
    public Etudiant getEtudiantByNumeroMatricule(@PathVariable String numeroMatricule) {
        Optional<Etudiant> etudiant = etudiantService.getEtudiantByNumeroMatricule(numeroMatricule);
        return etudiant.orElse(null);
    }

    @PostMapping("/create")
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantService.createEtudiant(etudiant);
    }

    @PutMapping("/update/{numeroMatricule}")
    public Etudiant updateEtudiant(@PathVariable String numeroMatricule, @RequestBody Etudiant etudiant) {
        return etudiantService.updateEtudiant(numeroMatricule, etudiant);
    }

    @DeleteMapping("/delete/{numeroMatricule}")
    public void deleteEtudiant(@PathVariable String numeroMatricule) {
        etudiantService.deleteEtudiant(numeroMatricule);
    }
}
