package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Professeur;
import com.iamniaina34.studentmanagerserver.repositories.ProfesseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProfesseurService {

    @Autowired
    private ProfesseurRepository professeurRepository;

    public List<Professeur> getAllProfesseurs() {
        return professeurRepository.findAll();
    }

    public Professeur getProfesseurById(Integer profId) {
        return professeurRepository.findById(profId).orElse(null);
    }

    public Professeur createProfesseur(Professeur professeur) {
        return professeurRepository.save(professeur);
    }

    public Professeur updateProfesseur(Integer profId, Professeur professeurDetails) {
        Professeur professeur = professeurRepository.findById(profId).orElse(null);
        if (professeur != null) {
            // Set other proprieties if needed
            professeur.setGrade(professeurDetails.getGrade());
            professeur.setProfesseurPseudo(professeurDetails.getProfesseurPseudo());
            return professeurRepository.save(professeur);
        }
        return null;
    }

    public void deleteProfesseur(Integer profId) {
        professeurRepository.deleteById(profId);
    }
}
