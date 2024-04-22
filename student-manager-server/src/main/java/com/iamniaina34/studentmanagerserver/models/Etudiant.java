package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "etudiant")
public class Etudiant extends Personne{

    @Id
    @GeneratedValue
    private Integer etudiantId;
    private String numMat;

    public Etudiant(Integer etudiantId, String numMat, String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate CINDu, String adresse, String numeroTelephone) {
        super(nom, prenom, dateNaissance, lieuNaissance, CIN, CINDu, adresse, numeroTelephone);
        this.numMat = numMat;
    }

    public Etudiant() {}

    @Override
    public String toString() {
        return String.format(
                "Etudiant[numMat: %s, nom: %s, prenom: %s]",
                this.numMat, super.getNom(), super.getPrenom()
        );
    }

    public Integer getEtudiantId() {
        return etudiantId;
    }

    public String getNumMat() {
        return numMat;
    }

    public void setNumMat(String numMat) {
        this.numMat = numMat;
    }

}
