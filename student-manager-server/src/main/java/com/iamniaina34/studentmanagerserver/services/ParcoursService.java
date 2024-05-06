package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Parcours;
import com.iamniaina34.studentmanagerserver.repositories.ParcoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ParcoursService {

    @Autowired
    private ParcoursRepository parcoursRepository;

    public List<Parcours> getAllParcours() {
        return parcoursRepository.findAll();
    }

    public Parcours getParcoursById(Integer parcoursId) {
        return parcoursRepository.findById(parcoursId).orElse(null);
    }

    public Parcours createParcours(Parcours parcours) {
        return parcoursRepository.save(parcours);
    }

    public Parcours updateParcours(Integer parcoursId, Parcours parcoursDetails) {
        Parcours parcours = parcoursRepository.findById(parcoursId).orElse(null);
        if (parcours != null) {
            // Mettre à jour les attributs selon vos besoins
            parcours.setMention(parcoursDetails.getMention());
            parcours.setResponsable(parcoursDetails.getResponsable());
            parcours.setParcoursDesign(parcoursDetails.getParcoursDesign());
            parcours.setParcoursAcro(parcoursDetails.getParcoursAcro());
            return parcoursRepository.save(parcours);
        }
        return null;
    }

    public void deleteParcours(Integer parcoursId) {
        parcoursRepository.deleteById(parcoursId);
    }
}
