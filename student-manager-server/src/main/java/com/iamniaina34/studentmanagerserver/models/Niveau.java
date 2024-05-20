package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "niveau")
public class Niveau {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "niveau_id")
    private Integer niveauId;

    @Column(name = "niveau_design", unique = true)
    private String niveauDesign;

    @Column(name = "niveau_acro", unique = true)
    private String niveauAcro;

    @JsonIgnoreProperties("niveau")
    @OneToMany(mappedBy = "niveau")
    private List<Etudiant> etudiants;

    public Niveau(Integer niveauId, String niveauDesign, String niveauAcro, List<Etudiant> etudiants) {
        this.niveauId = niveauId;
        this.niveauDesign = niveauDesign;
        this.niveauAcro = niveauAcro;
        this.etudiants = etudiants;
    }

    public Niveau() {
    }

    public Integer getNiveauId() {
        return niveauId;
    }

    public void setNiveauId(Integer niveauId) {
        this.niveauId = niveauId;
    }

    public String getNiveauDesign() {
        return niveauDesign;
    }

    public void setNiveauDesign(String niveauDesign) {
        this.niveauDesign = niveauDesign;
    }

    public String getNiveauAcro() {
        return niveauAcro;
    }

    public void setNiveauAcro(String niveauAcro) {
        this.niveauAcro = niveauAcro;
    }

    public List<Etudiant> getEtudiants() {
        return etudiants;
    }

    public void setEtudiants(List<Etudiant> etudiants) {
        this.etudiants = etudiants;
    }
}
