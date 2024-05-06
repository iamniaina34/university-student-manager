package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;

import java.time.LocalDate;

@MappedSuperclass
public class Personne {

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "date_naissance")
    private LocalDate dateNaissance;

    @Column(name = "lieu_naissance")
    private String lieuNaissance;

    @Column(name = "cin", columnDefinition = "char(12)", unique = true)
    private String cin;
    private LocalDate dateCin;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "numero_telephone", columnDefinition = "char(10)", unique = true)
    private String numeroTelephone;

    public Personne(String nom, String prenom, LocalDate dateNaissance, String lieuNaissance, String CIN, LocalDate dateCin, String adresse, String numeroTelephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.lieuNaissance = lieuNaissance;
        this.cin = CIN;
        this.dateCin = dateCin;
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
        return cin;
    }

    public void setCIN(String CIN) {
        this.cin = CIN;
    }

    public LocalDate getdateCin() {
        return dateCin;
    }

    public void setdateCin(LocalDate dateCin) {
        this.dateCin = dateCin;
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
