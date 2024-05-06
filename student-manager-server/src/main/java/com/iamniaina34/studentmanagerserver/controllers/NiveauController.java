package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Niveau;
import com.iamniaina34.studentmanagerserver.services.NiveauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/niveaux")
public class NiveauController {

    @Autowired
    private NiveauService niveauService;

    @GetMapping({"", "/", "/index"})
    public List<Niveau> getAllNiveaux() {
        return niveauService.getAllNiveaux();
    }

    @GetMapping("/{id}")
    public Niveau getNiveauById(@PathVariable Integer id) {
        return niveauService.getNiveauById(id);
    }

    @PostMapping("/create")
    public Niveau createNiveau(@RequestBody Niveau niveau) {
        return niveauService.createNiveau(niveau);
    }

    @PutMapping("/update/{id}")
    public Niveau updateNiveau(@PathVariable Integer id, @RequestBody Niveau niveau) {
        return niveauService.updateNiveau(id, niveau);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteNiveau(@PathVariable Integer id) {
        niveauService.deleteNiveau(id);
    }
}
