package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "annee_universitaire")
public class AnneUniversitaire {

    @Id
    @GeneratedValue
    private Integer auId;
    private LocalDate auDebut;
    private LocalDate auFin;

    public AnneUniversitaire(Integer auId, LocalDate auDebut, LocalDate auFin) {
        this.auId = auId;
        this.auDebut = auDebut;
        this.auFin = auFin;
    }

    public AnneUniversitaire() {
    }

    public Integer getAuId() {
        return auId;
    }

    public void setAuId(Integer auId) {
        this.auId = auId;
    }

    public LocalDate getAuDebut() {
        return auDebut;
    }

    public void setAuDebut(LocalDate auDebut) {
        this.auDebut = auDebut;
    }

    public LocalDate getAuFin() {
        return auFin;
    }

    public void setAuFin(LocalDate auFin) {
        this.auFin = auFin;
    }
}
