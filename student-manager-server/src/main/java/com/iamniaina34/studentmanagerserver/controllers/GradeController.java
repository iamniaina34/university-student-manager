package com.iamniaina34.studentmanagerserver.controllers;

import com.iamniaina34.studentmanagerserver.models.Grade;
import com.iamniaina34.studentmanagerserver.services.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/grades")
public class GradeController {

    @Autowired
    private GradeService gradeService;

    @GetMapping({"", "/", "/index"})
    public List<Grade> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @GetMapping("/{id}")
    public Grade getGradeById(@PathVariable Integer id) {
        return gradeService.getGradeById(id);
    }

    @PostMapping("/create")
    public Grade createGrade(@RequestBody Grade grade) {
        return gradeService.createGrade(grade);
    }

    @PutMapping("/update/{id}")
    public Grade updateGrade(@PathVariable Integer id, @RequestBody Grade grade) {
        return gradeService.updateGrade(id, grade);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteGrade(@PathVariable Integer id) {
        gradeService.deleteGrade(id);
    }
}
