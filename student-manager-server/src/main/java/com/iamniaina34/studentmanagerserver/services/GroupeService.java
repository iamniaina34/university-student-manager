package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Groupe;
import com.iamniaina34.studentmanagerserver.repositories.GroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupeService {

    private final GroupeRepository groupeRepository;

    @Autowired
    public GroupeService(GroupeRepository groupeRepository) {
        this.groupeRepository = groupeRepository;
    }

    public List<Groupe> getAllGroupes() {
        return groupeRepository.findAll();
    }

    public Groupe getGroupeByGroupeId(Integer groupeId) {
        return groupeRepository.findById(groupeId).orElse(null);
    }

    public Groupe createGroupe(Groupe groupe) {
        return groupeRepository.save(groupe);
    }

    public Groupe updateGroupe(Integer groupeId, Groupe groupeDetails) {
        Groupe groupe = this.getGroupeByGroupeId(groupeId);
        if (groupe != null) {
            groupe.setGroupeCode(groupeDetails.getGroupeCode());
            groupe.setGroupeDesign(groupeDetails.getGroupeDesign());
            return groupeRepository.save(groupe);
        }
        return null;
    }

    public void deleteGroupe(Integer groupeId) {
        groupeRepository.deleteById(groupeId);
    }
}
