package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "grade")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "gradeId")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grade_id")
    private Integer gradeId;

    @Column(name = "grade_acro", unique = true)
    private String gradeAcro;

    @Column(name = "grade_design", unique = true)
    private String gradeDesign;

    @OneToMany(mappedBy = "grade")
    @JsonIgnoreProperties("grade")
    private Set<Professeur> professeurs;

    public Grade(Integer gradeId, String gradeAcro, String gradeDesign) {
        this.gradeId = gradeId;
        this.gradeAcro = gradeAcro;
        this.gradeDesign = gradeDesign;
    }

    public Grade() {
    }

    public Integer getGradeId() {
        return gradeId;
    }

    public void setGradeId(Integer gradeId) {
        this.gradeId = gradeId;
    }

    public String getGradeAcro() {
        return gradeAcro;
    }

    public void setGradeAcro(String gradeAcro) {
        this.gradeAcro = gradeAcro;
    }

    public String getGradeDesign() {
        return gradeDesign;
    }

    public void setGradeDesign(String gradeDesign) {
        this.gradeDesign = gradeDesign;
    }

    public Set<Professeur> getProfesseurs() {
        return professeurs;
    }

    public void setProfesseurs(Set<Professeur> professeurs) {
        this.professeurs = professeurs;
    }
}
