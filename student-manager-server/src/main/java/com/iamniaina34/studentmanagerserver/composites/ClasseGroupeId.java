package com.iamniaina34.studentmanagerserver.composites;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ClasseGroupeId implements Serializable {

    @Column(name = "classe_id")
    private Integer classeId;

    @Column(name = "groupe_id")
    private Integer groupeId;

    public ClasseGroupeId(Integer classeId, Integer groupeId) {
        this.classeId = classeId;
        this.groupeId = groupeId;
    }

    public ClasseGroupeId() {
    }

    public Integer getClasseId() {
        return classeId;
    }

    public void setClasseId(Integer classeId) {
        this.classeId = classeId;
    }

    public Integer getGroupeId() {
        return groupeId;
    }

    public void setGroupeId(Integer groupeId) {
        this.groupeId = groupeId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ClasseGroupeId that)) return false;
        return Objects.equals(classeId, that.classeId) && Objects.equals(groupeId, that.groupeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(classeId, groupeId);
    }
}
