package com.iamniaina34.studentmanagerserver.services;

import com.iamniaina34.studentmanagerserver.models.Grade;
import com.iamniaina34.studentmanagerserver.repositories.GradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GradeService {

    private final GradeRepository gradeRepository;

    @Autowired
    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    public Grade getGradeById(Integer gradeId) {
        return gradeRepository.findById(gradeId).orElse(null);
    }

    public Grade createGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    public Grade updateGrade(Integer gradeId, Grade gradeDetails) {
        Grade grade = gradeRepository.findById(gradeId).orElse(null);
        if (grade != null) {
            grade.setGradeAcro(gradeDetails.getGradeAcro());
            grade.setGradeDesign(gradeDetails.getGradeDesign());
            return gradeRepository.save(grade);
        }
        return null;
    }

    public void deleteGrade(Integer gradeId) {
        gradeRepository.deleteById(gradeId);
    }
}
