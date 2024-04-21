package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "etudiant")
@PrimaryKeyJoinColumn(name = "numMat")
public class Etudiant extends Personne{

    @Id
    private String numMat;

    protected Etudiant() {
        // TODO
    }

    public Etudiant(String numMat, String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate CINDu, String adresse, String numeroTelephone) {
        super(nom, prenom, dateNaissance, lieuNaissance, CIN, CINDu, adresse, numeroTelephone);
        this.numMat = numMat;
    }

    @Override
    public String toString() {
        return String.format(
                "Etudiant[numMat: %s, nom: %s, prenom: %s]",
                this.numMat, super.getNom(), super.getPrenom()
        );
    }

    public String getNumMat() {
        return numMat;
    }

    public void setNumMat(String numMat) {
        this.numMat = numMat;
    }

}
