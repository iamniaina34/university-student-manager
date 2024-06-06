package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "parcours")
public class Parcours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parcours_id")
    private Integer parcoursId;

    @Column(name = "parcours_design", unique = true)
    private String parcoursDesign;

    @Column(name = "parcours_acro", unique = true)
    private String parcoursAcro;

    @JsonIgnoreProperties("parcours")
    @ManyToOne
    @JoinColumn(name = "mention_id", referencedColumnName = "mention_id")
    private Mention mention;

    @JsonIgnoreProperties("parcours")
    @ManyToOne
    @JoinColumn(name = "professeur_id", referencedColumnName = "professeur_id", nullable = true)
    private Professeur responsable;

    @JsonIgnoreProperties("parcours")
    @OneToMany(mappedBy = "parcours")
    private List<Etudiant> etudiants;

    public Parcours(Integer parcoursId, Mention mention, Professeur responsable, String parcoursDesign, String parcoursAcro, List<Etudiant> etudiants) {
        this.parcoursId = parcoursId;
        this.mention = mention;
        this.responsable = responsable;
        this.parcoursDesign = parcoursDesign;
        this.parcoursAcro = parcoursAcro;
        this.etudiants = etudiants;
    }

    public Parcours() {
    }

    public Integer getParcoursId() {
        return parcoursId;
    }

    public void setParcoursId(Integer parcoursId) {
        this.parcoursId = parcoursId;
    }

    public Mention getMention() {
        return mention;
    }

    public void setMention(Mention mention) {
        this.mention = mention;
    }

    public Professeur getResponsable() {
        return responsable;
    }

    public void setResponsable(Professeur responsable) {
        this.responsable = responsable;
    }

    public String getParcoursDesign() {
        return parcoursDesign;
    }

    public void setParcoursDesign(String parcoursDesign) {
        this.parcoursDesign = parcoursDesign;
    }

    public String getParcoursAcro() {
        return parcoursAcro;
    }

    public void setParcoursAcro(String parcoursAcro) {
        this.parcoursAcro = parcoursAcro;
    }

    public List<Etudiant> getEtudiants() {
        return etudiants;
    }

    public void setEtudiants(List<Etudiant> etudiants) {
        this.etudiants = etudiants;
    }
}
