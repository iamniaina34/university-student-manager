package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.AnneUniversitaire;
import com.iamniaina34.studentmanagerserver.services.AnneeUniversitaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/anneeUniversitaires")
public class AnneeUniversitaireController {

    @Autowired
    private AnneeUniversitaireService anneeUniversitaireService;

    @GetMapping({"/", "/index"})
    public List<AnneUniversitaire> getAllAnneeUniversitaires() {
        return anneeUniversitaireService.getAllAnneeUniversitaires();
    }

    @GetMapping("/anneeUniversitaire/{auId}")
    public AnneUniversitaire getAnneeUniversitaireByAuId(@PathVariable Integer auId) {
        return anneeUniversitaireService.getAnneeUniversitaireByAuId(auId);
    }

    @PostMapping("/add")
    public AnneUniversitaire addAnneeUniversitaire(@RequestBody AnneUniversitaire anneUniversitaire) {
        return anneeUniversitaireService.saveAnneeUniversitaire(anneUniversitaire);
    }

    @PutMapping("/update/{auId}")
    public AnneUniversitaire updateAnneeUniversitaire(@PathVariable Integer auId, @RequestBody AnneUniversitaire auData) {
        return anneeUniversitaireService.updateAnneeUniversitaire(auId, auData);
    }

    @PutMapping("/delete/{auId}")
    public void deleteAnneeUniversitaire(@PathVariable Integer auId) {
        anneeUniversitaireService.deleteAnneeUniversitaireByAuId(auId);
    }

}
