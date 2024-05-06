package com.iamniaina34.studentmanagerserver.models;

import jakarta.persistence.*;

@Entity
@Table(name = "groupe")
public class Groupe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "groupe_id")
    private Integer groupeId;

    @Column(name = "groupe_design")
    private String groupeDesign;

    @Column(name = "groupe_code")
    private String groupeCode;

    public Groupe(Integer groupeId, String groupeDesign, String groupeCode) {
        this.groupeId = groupeId;
        this.groupeDesign = groupeDesign;
        this.groupeCode = groupeCode;
    }

    public Groupe() {
    }

    public Integer getGroupeId() {
        return groupeId;
    }

    public void setGroupeId(Integer groupeId) {
        this.groupeId = groupeId;
    }

    public String getGroupeDesign() {
        return groupeDesign;
    }

    public void setGroupeDesign(String groupeDesign) {
        this.groupeDesign = groupeDesign;
    }

    public String getGroupeCode() {
        return groupeCode;
    }

    public void setGroupeCode(String groupeCode) {
        this.groupeCode = groupeCode;
    }
}
