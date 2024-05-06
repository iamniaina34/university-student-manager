package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Niveau;
import com.iamniaina34.studentmanagerserver.repositories.NiveauRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NiveauService {

    private final NiveauRepository niveauRepository;

    @Autowired
    public NiveauService(NiveauRepository niveauRepository) {
        this.niveauRepository = niveauRepository;
    }

    public List<Niveau> getAllNiveaux() {
        return niveauRepository.findAll();
    }

    public Niveau getNiveauById(Integer niveauId) {
        return niveauRepository.findById(niveauId).orElse(null);
    }

    public Niveau createNiveau(Niveau niveau) {
        return niveauRepository.save(niveau);
    }

    public Niveau updateNiveau(Integer niveauId, Niveau niveauDetails) {
        Niveau niveau = niveauRepository.findById(niveauId).orElse(null);
        if (niveau != null) {
            niveau.setNiveauDesign(niveauDetails.getNiveauDesign());
            niveau.setNiveauAcro(niveauDetails.getNiveauAcro());
            return niveauRepository.save(niveau);
        }
        return null;
    }

    public void deleteNiveau(Integer niveauId) {
        niveauRepository.deleteById(niveauId);
    }
}
