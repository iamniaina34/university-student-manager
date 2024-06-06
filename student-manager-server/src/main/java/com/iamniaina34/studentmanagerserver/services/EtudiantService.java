package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.exceptions.EtudiantCreationException;
import com.iamniaina34.studentmanagerserver.exceptions.EtudiantUpdateException;
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
        etudiant.setPrenom(etudiant.getPrenom() == null || etudiant.getPrenom().isBlank() ? null : etudiant.getPrenom());
        etudiant.setLieuNaissance(etudiant.getLieuNaissance() == null || etudiant.getLieuNaissance().isBlank() ? null : etudiant.getLieuNaissance());
        etudiant.setCin(etudiant.getCin() == null || etudiant.getCin().isBlank() ? null : etudiant.getCin());
        etudiant.setdateCin(etudiant.getCin() == null || etudiant.getdateCin() == null ? null : etudiant.getdateCin());
        etudiant.setAdresse(etudiant.getAdresse() == null || etudiant.getAdresse().isBlank() ? null : etudiant.getAdresse());
        etudiant.setNumeroTelephone(etudiant.getNumeroTelephone() == null || etudiant.getNumeroTelephone().isBlank() ? null : etudiant.getNumeroTelephone());

        if (etudiantRepository.findById(etudiant.getNumeroMatricule()).isPresent()) {
            throw new EtudiantCreationException("Duplicate entry for numero_matricule " + etudiant.getNumeroMatricule());
        }
        if (etudiant.getCin() != null && etudiantRepository.findByCin(etudiant.getCin()).isPresent()) {
            throw new EtudiantCreationException("Duplicate entry for cin " + etudiant.getCin());
        }
        if (etudiant.getNumeroTelephone() != null && etudiantRepository.findByNumeroTelephone(etudiant.getNumeroTelephone()).isPresent()) {
            throw new EtudiantCreationException("Duplicate entry for numero_telephone" + etudiant.getNumeroTelephone());
        }
        return etudiantRepository.save(etudiant);
    }

    public Etudiant updateEtudiant(String numeroMatricule, Etudiant etudiantDetails) {
        Etudiant etudiant = etudiantRepository.findById(numeroMatricule).orElse(null);

        if (etudiant == null) {
            throw new EtudiantUpdateException("numero_matricule not found");
        }

        if (!etudiantDetails.getNumeroMatricule().equals(numeroMatricule)) {
            throw new EtudiantUpdateException("numeros_matricules mismatch");
        }

        if (etudiantDetails.getNumeroTelephone() != null && !etudiantDetails.getNumeroTelephone().isBlank()) {
            Etudiant etudiantWithSamePhone = etudiantRepository.findByNumeroTelephone(etudiantDetails.getNumeroTelephone()).orElse(null);
            if (etudiantWithSamePhone != null && !etudiantWithSamePhone.getNumeroMatricule().equals(numeroMatricule)) {
                throw new EtudiantUpdateException("duplicate entry for numero_telephone");
            }
        }

        if (etudiantDetails.getCin() != null && !etudiantDetails.getCin().isBlank()) {
            Etudiant etudiantWithSameCin = etudiantRepository.findByCin(etudiantDetails.getCin()).orElse(null);
            if (etudiantWithSameCin != null && !etudiantWithSameCin.getNumeroMatricule().equals(numeroMatricule)) {
                throw new EtudiantUpdateException("duplicate entry for cin");
            }
        }

        etudiantDetails.setPrenom(etudiantDetails.getPrenom() == null || etudiantDetails.getPrenom().isBlank() ? null : etudiantDetails.getPrenom());
        etudiantDetails.setLieuNaissance(etudiantDetails.getLieuNaissance() == null || etudiantDetails.getLieuNaissance().isBlank() ? null : etudiantDetails.getLieuNaissance());
        etudiantDetails.setCin(etudiantDetails.getCin() == null || etudiantDetails.getCin().isBlank() ? null : etudiantDetails.getCin());
        etudiantDetails.setdateCin(etudiantDetails.getCin() == null || etudiantDetails.getdateCin() == null ? null : etudiantDetails.getdateCin());
        etudiantDetails.setAdresse(etudiantDetails.getAdresse() == null || etudiantDetails.getAdresse().isBlank() ? null : etudiantDetails.getAdresse());
        etudiantDetails.setNumeroTelephone(etudiantDetails.getNumeroTelephone() == null || etudiantDetails.getNumeroTelephone().isBlank() ? null : etudiantDetails.getNumeroTelephone());

        etudiant.setNom(etudiantDetails.getNom());
        etudiant.setPrenom(etudiantDetails.getPrenom());
        etudiant.setDateNaissance(etudiantDetails.getDateNaissance());
        etudiant.setLieuNaissance(etudiantDetails.getLieuNaissance());
        etudiant.setCin(etudiantDetails.getCin());
        etudiant.setdateCin(etudiantDetails.getdateCin());
        etudiant.setNiveau(etudiantDetails.getNiveau());
        etudiant.setParcours(etudiantDetails.getParcours());
        etudiant.setAdresse(etudiantDetails.getAdresse());
        etudiant.setNumeroTelephone(etudiantDetails.getNumeroTelephone());

        return etudiantRepository.save(etudiant);
    }

    public void deleteEtudiant(String numeroMatricule) {
        etudiantRepository.deleteById(numeroMatricule);
    }

    public void deleteAllEtudiantById(List<String> nml) {
        etudiantRepository.deleteAllById(nml);
    }
}
