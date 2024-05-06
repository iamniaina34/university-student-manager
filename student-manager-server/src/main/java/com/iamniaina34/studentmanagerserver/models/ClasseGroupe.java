package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.iamniaina34.studentmanagerserver.composites.ClasseGroupeId;
import jakarta.persistence.*;

@Entity
@Table(name = "classe_groupe")
public class ClasseGroupe {

    @EmbeddedId
    @JsonProperty("id")
    @JsonIgnore
    private ClasseGroupeId classeGroupeId;

    @Column(name = "classe_groupe_description")
    private String classeGroupeDescription;

    @ManyToOne
    @MapsId("classeId")
    @JoinColumn(name = "classe_id")
    private Classe classe;

    @ManyToOne
    @MapsId("groupeId")
    @JoinColumn(name = "groupe_id")
    private Groupe groupe;

    public ClasseGroupe(ClasseGroupeId classeGroupeId, String classeGroupeDescription, Classe classe, Groupe groupe) {
        this.classeGroupeId = classeGroupeId;
        this.classeGroupeDescription = classeGroupeDescription;
        this.classe = classe;
        this.groupe = groupe;
    }

    public ClasseGroupe() {
    }

    public ClasseGroupeId getClasseGroupeId() {
        return classeGroupeId;
    }

    public void setClasseGroupeId(ClasseGroupeId classeGroupeId) {
        this.classeGroupeId = classeGroupeId;
    }

    public String getGroupeDescription() {
        return classeGroupeDescription;
    }

    public void setGroupeDescription(String classeGroupeDescription) {
        this.classeGroupeDescription = classeGroupeDescription;
    }

    public Classe getClasse() {
        return classe;
    }

    public void setClasse(Classe classe) {
        this.classe = classe;
    }

    public Groupe getGroupe() {
        return groupe;
    }

    public void setGroupe(Groupe groupe) {
        this.groupe = groupe;
    }
}
