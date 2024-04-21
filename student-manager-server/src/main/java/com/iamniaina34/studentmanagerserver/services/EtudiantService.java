package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Etudiant;
import com.iamniaina34.studentmanagerserver.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    public List<Etudiant> getAllEtudiants() {
        return (List<Etudiant>) etudiantRepository.findAll();
    }

    public Etudiant getEtudiantByNumMat(String numMat) {
        return etudiantRepository.findById(numMat).orElse(null);
    }

    public Etudiant saveEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public Etudiant updateEtudiant(String numMat, Etudiant etudiantData) {
        Etudiant etudiant = etudiantRepository.findById(numMat).orElse(null);
        if (etudiant != null) {
            etudiant.setNom(etudiantData.getNom());
            etudiant.setPrenom(etudiantData.getPrenom());
            return etudiantRepository.save(etudiant);
        }
        return null;
    }

    public void deleteEtudiant(String numMat) {
        etudiantRepository.deleteById(numMat);
    }

}
