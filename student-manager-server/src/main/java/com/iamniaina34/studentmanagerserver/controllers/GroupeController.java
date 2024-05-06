package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Groupe;
import com.iamniaina34.studentmanagerserver.services.GroupeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groupes")
public class GroupeController {

    @Autowired
    private GroupeService groupeService;

    @GetMapping({"", "/", "/index"})
    public List<Groupe> getAllGroupes() {
        return groupeService.getAllGroupes();
    }

    @GetMapping("/{groupeId}")
    public Groupe getGroupe(@PathVariable Integer groupeId) {
        return groupeService.getGroupeByGroupeId(groupeId);
    }

    @PostMapping("/create")
    public Groupe createGroupe(@RequestBody Groupe groupe) {
        return groupeService.createGroupe(groupe);
    }

    @PutMapping("/update/{groupeId}")
    public Groupe updateGroupe (@PathVariable Integer groupeId, @RequestBody Groupe groupeDetails) {
        return groupeService.updateGroupe(groupeId,groupeDetails);
    }

    @DeleteMapping("/delete/{groupeId}")
    public void deleteGroupe(@PathVariable Integer groupeId) {
        groupeService.deleteGroupe(groupeId);
    }
}
