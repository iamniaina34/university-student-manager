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
    private int auId;
    private LocalDate auDeb;
    private LocalDate auFin;

    public AnneUniversitaire(int auId, LocalDate auDeb, LocalDate auFin) {
        this.auId = auId;
        this.auDeb = auDeb;
        this.auFin = auFin;
    }

    public AnneUniversitaire() {
    }

    public int getAuId() {
        return auId;
    }

    public void setAuId(int auId) {
        this.auId = auId;
    }

    public LocalDate getAuDeb() {
        return auDeb;
    }

    public void setAuDeb(LocalDate auDeb) {
        this.auDeb = auDeb;
    }

    public LocalDate getAuFin() {
        return auFin;
    }

    public void setAuFin(LocalDate auFin) {
        this.auFin = auFin;
    }
}
