package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "etudiant")
public class Etudiant extends Personne {

    @Id
    @Column(name = "numero_matricule", length = 8)
    private String numeroMatricule;

    @JsonIgnoreProperties("etudiants")
    @ManyToOne
    @JoinColumn(name = "niveau_id", referencedColumnName = "niveau_id", nullable = false)
    private Niveau niveau;

    @JsonIgnoreProperties("etudiants")
    @ManyToOne
    @JoinColumn(name = "parcours_id", referencedColumnName = "parcours_id", nullable = false)
    private Parcours parcours;

    public Etudiant(String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate dateCin, String adresse, String numeroTelephone, String numeroMatricule, Niveau niveau, Parcours parcours) {
        super(nom, prenom, dateNaissance, lieuNaissance, CIN, dateCin, adresse, numeroTelephone);
        this.numeroMatricule = numeroMatricule;
        this.niveau = niveau;
        this.parcours = parcours;
    }

    public Etudiant() {}

    public String getNumeroMatricule() {
        return numeroMatricule;
    }

    public void setNumeroMatricule(String numeroMatricule) {
        this.numeroMatricule = numeroMatricule;
    }

    public Niveau getNiveau() {
        return niveau;
    }

    public void setNiveau(Niveau niveau) {
        this.niveau = niveau;
    }

    public Parcours getParcours() {
        return parcours;
    }

    public void setParcours(Parcours parcours) {
        this.parcours = parcours;
    }
}
