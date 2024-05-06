package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "etudiant")
public class Etudiant extends Personne {

    @Id
    @Column(name = "numero_matricule", length = 8)
    private String numeroMatricule;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "classe_id", referencedColumnName = "classe_id"),
            @JoinColumn(name = "groupe_id", referencedColumnName = "groupe_id")
    })
    private ClasseGroupe classeGroupe;

    public Etudiant(String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate dateCin, String adresse, String numeroTelephone, String numeroMatricule, ClasseGroupe classeGroupe) {
        super(nom, prenom, dateNaissance, lieuNaissance, CIN, dateCin, adresse, numeroTelephone);
        this.numeroMatricule = numeroMatricule;
        this.classeGroupe = classeGroupe;
    }

    public Etudiant() {}

    public String getNumeroMatricule() {
        return numeroMatricule;
    }

    public void setNumeroMatricule(String numeroMatricule) {
        this.numeroMatricule = numeroMatricule;
    }

    public ClasseGroupe getClasseGroupe() {
        return classeGroupe;
    }

    public void setClasseGroupe(ClasseGroupe classeGroupe) {
        this.classeGroupe = classeGroupe;
    }
}
