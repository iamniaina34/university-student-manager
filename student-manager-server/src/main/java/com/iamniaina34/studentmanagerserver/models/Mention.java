package com.iamniaina34.studentmanagerserver.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

@Entity
@Table(name = "mention")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "mentionId"
)
public class Mention {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mention_id")
    private Integer mentionId;

    @Column(name = "mention_acro", unique = true)
    private String mentionAcro;

    @Column(name = "mention_design", unique = true)
    private String mentionDesign;

    @ManyToOne
    @JoinColumn(name = "professeur_id", referencedColumnName = "professeur_id", nullable = true)
    private Professeur responsable;

    public Mention(Integer mentionId, Professeur responsable, String mentionAcro, String mentionDesign) {
        this.mentionId = mentionId;
        this.responsable = responsable;
        this.mentionAcro = mentionAcro;
        this.mentionDesign = mentionDesign;
    }

    public Mention() {
    }

    public Integer getMentionId() {
        return mentionId;
    }

    public void setMentionId(Integer mentionId) {
        this.mentionId = mentionId;
    }

    public Professeur getResponsable() {
        return responsable;
    }

    public void setResponsable(Professeur responsable) {
        this.responsable = responsable;
    }

    public String getMentionAcro() {
        return mentionAcro;
    }

    public void setMentionAcro(String mentionAcro) {
        this.mentionAcro = mentionAcro;
    }

    public String getMentionDesign() {
        return mentionDesign;
    }

    public void setMentionDesign(String mentionDesign) {
        this.mentionDesign = mentionDesign;
    }

}
