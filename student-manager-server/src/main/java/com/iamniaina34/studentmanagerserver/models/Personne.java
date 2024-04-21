package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;

import java.time.LocalDate;

@MappedSuperclass
public class Personne {

    private String nom;
    private String prenom;
    private LocalDate dateNaissance;
    private String lieuNaissance;
    private String CIN;
    private LocalDate CINDu;
    private String adresse;
    private String numeroTelephone;

    public Personne(String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate CINDu, String adresse, String numeroTelephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.lieuNaissance = lieuNaissance;
        this.CIN = CIN;
        this.CINDu = CINDu;
        this.adresse = adresse;
        this.numeroTelephone = numeroTelephone;
    }

    public Personne() {
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public LocalDate getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(LocalDate dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getLieuNaissance() {
        return lieuNaissance;
    }

    public void setLieuNaissance(String lieuNaissance) {
        this.lieuNaissance = lieuNaissance;
    }

    public String getCIN() {
        return CIN;
    }

    public void setCIN(String CIN) {
        this.CIN = CIN;
    }

    public LocalDate getCINDu() {
        return CINDu;
    }

    public void setCINDu(LocalDate CINDu) {
        this.CINDu = CINDu;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getNumeroTelephone() {
        return numeroTelephone;
    }

    public void setNumeroTelephone(String numeroTelephone) {
        this.numeroTelephone = numeroTelephone;
    }
}
