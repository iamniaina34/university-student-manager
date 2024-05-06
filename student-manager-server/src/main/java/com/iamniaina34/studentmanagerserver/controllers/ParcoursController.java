package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Parcours;
import com.iamniaina34.studentmanagerserver.services.ParcoursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/parcours")
public class ParcoursController {

    @Autowired
    private ParcoursService parcoursService;

    @GetMapping({"", "/", "/index"})
    public List<Parcours> getAllParcours() {
        return parcoursService.getAllParcours();
    }

    @GetMapping("/{id}")
    public Parcours getParcoursById(@PathVariable Integer id) {
        return parcoursService.getParcoursById(id);
    }

    @PostMapping("/create")
    public Parcours createParcours(@RequestBody Parcours parcours) {
        return parcoursService.createParcours(parcours);
    }

    @PutMapping("/update/{id}")
    public Parcours updateParcours(@PathVariable Integer id, @RequestBody Parcours parcours) {
        return parcoursService.updateParcours(id, parcours);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteParcours(@PathVariable Integer id) {
        parcoursService.deleteParcours(id);
    }
}
