package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.*;

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

    public Niveau(Integer niveauId, String niveauDesign, String niveauAcro) {
        this.niveauId = niveauId;
        this.niveauDesign = niveauDesign;
        this.niveauAcro = niveauAcro;
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
}
