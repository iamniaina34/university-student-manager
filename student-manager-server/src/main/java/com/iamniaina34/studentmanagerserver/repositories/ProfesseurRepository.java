package com.iamniaina34.studentmanagerserver.repositories;

import com.iamniaina34.studentmanagerserver.models.Professeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesseurRepository extends JpaRepository<Professeur, Integer> {
}
