package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.composites.ClasseGroupeId;
import com.iamniaina34.studentmanagerserver.models.ClasseGroupe;
import com.iamniaina34.studentmanagerserver.services.ClasseGroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classeGroupes")
public class ClasseGroupeController {

    @Autowired
    private ClasseGroupeService classeGroupeService;

    @GetMapping({"", "/", "/index"})
    public List<ClasseGroupe> getAllClasseGroupes() {
        return classeGroupeService.getAllClasseGroupes();
    }

    @GetMapping("/{classeId}/{groupeId}")
    public ClasseGroupe getClasseGroupe(@PathVariable int classeId, @PathVariable int groupeId) {
        ClasseGroupeId id = new ClasseGroupeId(classeId, groupeId);
        return classeGroupeService.getClasseGroupeByClasseGroupeId(id);
    }

    @PostMapping("/create")
    public ClasseGroupe createClasseGroupe(@RequestBody ClasseGroupe classeGroupe) {
        return classeGroupeService.createClasseGroupe(classeGroupe);
    }

    @PutMapping("/update/{classeId}/{groupeId}")
    public ClasseGroupe updateClasseGroupe(@PathVariable int classeId, @PathVariable int groupeId, @RequestBody ClasseGroupe classeGroupe) {
        ClasseGroupeId id = new ClasseGroupeId(classeId, groupeId);
        return classeGroupeService.updateClasseGroupe(id, classeGroupe);
    }

    @DeleteMapping("/delete/{classeId}/{groupeId}")
    public void deleteClasseGroupe(@PathVariable int classeId, @PathVariable int groupeId) {
        ClasseGroupeId id = new ClasseGroupeId(classeId, groupeId);
        classeGroupeService.deleteClasseGroupe(id);
    }
}
