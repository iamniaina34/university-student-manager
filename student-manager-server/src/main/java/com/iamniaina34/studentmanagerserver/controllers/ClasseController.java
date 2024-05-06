package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Classe;
import com.iamniaina34.studentmanagerserver.services.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/classes")
public class ClasseController {

    @Autowired
    private ClasseService classeService;

    @GetMapping({"", "/", "/index"})
    public List<Classe> getAllClasses() {
        return classeService.getAllClasses();
    }

    @GetMapping("/{id}")
    public Classe getClasseById(@PathVariable Integer id) {
        return classeService.getClasseById(id);
    }

    @PostMapping("/create")
    public Classe createClasse(@RequestBody Classe classe) {
        return classeService.createClasse(classe);
    }

    @PutMapping("/update/{id}")
    public Classe updateClasse(@PathVariable Integer id, @RequestBody Classe classe) {
        return classeService.updateClasse(id, classe);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteClasse(@PathVariable Integer id) {
        classeService.deleteClasse(id);
    }
}
