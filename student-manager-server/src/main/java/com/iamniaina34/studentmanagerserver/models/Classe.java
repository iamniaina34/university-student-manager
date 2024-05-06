package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.*;

@Entity
@Table(name = "classe")
public class Classe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "classe_id")
    private int classeId;

    @ManyToOne
    @JoinColumn(name = "niveau_id", referencedColumnName = "niveau_id")
    private Niveau niveau;

    @ManyToOne
    @JoinColumn(name = "parcours_id", referencedColumnName = "parcours_id")
    private Parcours parcours;

    public Classe(int classeId, Niveau niveau, Parcours parcours) {
        this.classeId = classeId;
        this.niveau = niveau;
        this.parcours = parcours;
    }

    public Classe() {
    }

    public int getClasseId() {
        return classeId;
    }

    public void setClasseId(int classeId) {
        this.classeId = classeId;
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
