package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Etudiant;
import com.iamniaina34.studentmanagerserver.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EtudiantService {

    private final EtudiantRepository etudiantRepository;

    @Autowired
    public EtudiantService(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    public Optional<Etudiant> getEtudiantByNumeroMatricule(String numeroMatricule) {
        return etudiantRepository.findById(numeroMatricule);
    }

    public Etudiant createEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public Etudiant updateEtudiant(String numeroMatricule, Etudiant etudiantDetails) {
        Etudiant etudiant = etudiantRepository.findById(numeroMatricule).orElse(null);
        if (etudiant != null){
            etudiant.setNom(etudiantDetails.getNom());
            etudiant.setPrenom(etudiantDetails.getPrenom());
            return etudiantRepository.save(etudiant);
        }
        return null;
    }

    public void deleteEtudiant(String numeroMatricule) {
        etudiantRepository.deleteById(numeroMatricule);
    }
}
