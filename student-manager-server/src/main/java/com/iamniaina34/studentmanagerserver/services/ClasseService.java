package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Classe;
import com.iamniaina34.studentmanagerserver.repositories.ClasseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClasseService {

    @Autowired
    private ClasseRepository classeRepository;

    public List<Classe> getAllClasses() {
        return classeRepository.findAll();
    }

    public Classe getClasseById(Integer classeId) {
        return classeRepository.findById(classeId).orElse(null);
    }

    public Classe createClasse(Classe classe) {
        return classeRepository.save(classe);
    }

    public Classe updateClasse(Integer classeId, Classe classeDetails) {
        Classe classe = classeRepository.findById(classeId).orElse(null);
        if (classe != null) {
            classe.setNiveau(classeDetails.getNiveau());
            classe.setParcours(classeDetails.getParcours());
            return classeRepository.save(classe);
        }
        return null;
    }

    public void deleteClasse(Integer classeId) {
        classeRepository.deleteById(classeId);
    }
}
