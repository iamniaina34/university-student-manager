package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.composites.ClasseGroupeId;
import com.iamniaina34.studentmanagerserver.models.ClasseGroupe;
import com.iamniaina34.studentmanagerserver.repositories.ClasseGroupeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseGroupeService {

    private final ClasseGroupeRepository classeGroupeRepository;

    @Autowired
    public ClasseGroupeService(ClasseGroupeRepository classeGroupeRepository) {
        this.classeGroupeRepository = classeGroupeRepository;
    }
    
    public List<ClasseGroupe> getAllClasseGroupes() {
        return classeGroupeRepository.findAll();
    }
    
    public ClasseGroupe getClasseGroupeByClasseGroupeId(ClasseGroupeId id) {
        return classeGroupeRepository.findById(id).orElse(null);
    }
    
    public ClasseGroupe createClasseGroupe(ClasseGroupe classeGroupe) {
        return classeGroupeRepository.save(classeGroupe);
    }
    
    public ClasseGroupe updateClasseGroupe(ClasseGroupeId id, ClasseGroupe classeGroupeDetails) {
        ClasseGroupe classeGroupe = classeGroupeRepository.findById(id).orElse(null);
        if (classeGroupe != null) {
            classeGroupe.setGroupeDescription(classeGroupeDetails.getGroupeDescription());
            return classeGroupeRepository.save(classeGroupe);
        }
        return null;
    }

    public void deleteClasseGroupe(ClasseGroupeId id) {
        classeGroupeRepository.deleteById(id);
    }
}
