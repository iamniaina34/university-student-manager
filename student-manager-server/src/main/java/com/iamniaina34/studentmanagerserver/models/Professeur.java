package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "professeur")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "professeurId"
)
public class Professeur extends Personne{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "professeur_id")
    private Integer professeurId;

    @ManyToOne
    @JoinColumn(name = "grade_id", referencedColumnName = "grade_id")
    private Grade grade;

    @Column(name = "professeur_pseudo", unique = true)
    private String professeurPseudo;

    public Professeur(String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate dateCin, String adresse, String numeroTelephone, Integer professeurId, Grade grade, String professeurPseudo) {
        super(nom, prenom, dateNaissance, lieuNaissance, CIN, dateCin, adresse, numeroTelephone);
        this.professeurId = professeurId;
        this.grade = grade;
        this.professeurPseudo = professeurPseudo;
    }

    public Professeur(Integer professeurId, Grade grade, String professeurPseudo) {
        super();
        this.professeurId = professeurId;
        this.grade = grade;
        this.professeurPseudo = professeurPseudo;
    }

    public Professeur() {
    }

    public Integer getProfesseurId() {
        return professeurId;
    }

    public void setProfesseurId(Integer professeurId) {
        this.professeurId = professeurId;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public String getProfesseurPseudo() {
        return professeurPseudo;
    }

    public void setProfesseurPseudo(String professeurPseudo) {
        this.professeurPseudo = professeurPseudo;
    }
}
