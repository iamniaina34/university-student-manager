package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Etudiant;
import com.iamniaina34.studentmanagerserver.services.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/etudiants")
public class EtudiantController {

    @Autowired
    private EtudiantService etudiantService;


    @GetMapping(path = {"/", "/index"})
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @GetMapping(path = "/etudiant/etudiantNumMat/{numMat}")
    public Etudiant getEtudiantByNumMat(@PathVariable String numMat) {
        return etudiantService.getEtudiantByNumMat(numMat);
    }

    @GetMapping(path = "/etudiant/etudiantId/{etudiantId}")
    public Etudiant getEtudiantById(@PathVariable Integer etudiantId) {
        return etudiantService.getEtudiantByEtudiantId(etudiantId);
    }

    @PostMapping(path = "/add")
    public Etudiant addEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantService.saveEtudiant(etudiant);
    }

    @PutMapping(path = "/update/{etudiantId}")
    public Etudiant updateEtudiant(@PathVariable Integer etudiantId, @RequestBody Etudiant etudiant) {
        return etudiantService.updateEtudiant(etudiantId, etudiant);
    }

    @DeleteMapping("/delete/{numMat}")
    public String deletEtudiant(@PathVariable Integer etudiantId) {
        return  etudiantService.deleteEtudiant(etudiantId);
    }
}
