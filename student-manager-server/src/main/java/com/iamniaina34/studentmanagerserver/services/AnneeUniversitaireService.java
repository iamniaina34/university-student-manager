package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.AnneUniversitaire;
import com.iamniaina34.studentmanagerserver.repositories.AnneeUniversitaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnneeUniversitaireService {

    @Autowired
    private AnneeUniversitaireRepository anneeUniversitaireRepository;

    public List<AnneUniversitaire> getAllAnneeUniversitaires() {
        return anneeUniversitaireRepository.findAll();
    }

    public AnneUniversitaire getAnneeUniversitaireByAuId(int auId) {
        return anneeUniversitaireRepository.findById(auId).orElse(null);
    }

    public AnneUniversitaire saveAnneeUniversitaire(AnneUniversitaire anneUniversitaire) {
        return anneeUniversitaireRepository.save(anneUniversitaire);
    }

    public AnneUniversitaire updateAnneeUniversitaire(int auId, AnneUniversitaire anneUniversitaireData) {
        AnneUniversitaire anneUniversitaire = anneeUniversitaireRepository.findById(auId).orElse(null);
        if (anneUniversitaire != null) {
            anneUniversitaire.setAuDeb(anneUniversitaireData.getAuDeb());
            anneUniversitaire.setAuFin(anneUniversitaireData.getAuFin());
            return anneeUniversitaireRepository.save(anneUniversitaire);
        }
        return null;
    }

    public void deleteAnneeUniversitaireByAuId(int auId) {
        anneeUniversitaireRepository.deleteById(auId);
    }
}
