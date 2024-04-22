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

    public Etudiant getEtudiantByEtudiantId(Integer etudiantId) {
        return etudiantRepository.findById(etudiantId).orElse(null);
    }

    public Etudiant getEtudiantByNumMat(String numMat) {
        return etudiantRepository.findByNumMat(numMat).orElse(null);
    }

    public Etudiant saveEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public Etudiant updateEtudiant(Integer etudiantId, Etudiant etudiantData) {
        Etudiant etudiant = etudiantRepository.findById(etudiantId).orElse(null);
        if (etudiant != null) {
            etudiant.setNumMat(etudiantData.getNumMat());
            etudiant.setNom(etudiantData.getNom());
            etudiant.setPrenom(etudiantData.getPrenom());
            etudiant.setDateNaissance(etudiantData.getDateNaissance());
            etudiant.setLieuNaissance(etudiantData.getLieuNaissance());
            etudiant.setCIN(etudiantData.getCIN());
            etudiant.setCINDu(etudiantData.getCINDu());
            etudiant.setNumeroTelephone(etudiantData.getNumeroTelephone());
            etudiant.setAdresse(etudiantData.getAdresse());
            return etudiantRepository.save(etudiant);
        }
        return null;
    }

    public String deleteEtudiant(Integer etudiantId) {
        etudiantRepository.deleteById(etudiantId);
        return ("etudiant " + etudiantId + " deleted");
    }

}
