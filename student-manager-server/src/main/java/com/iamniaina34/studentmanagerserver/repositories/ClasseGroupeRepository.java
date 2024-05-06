package com.iamniaina34.studentmanagerserver.repositories;

import com.iamniaina34.studentmanagerserver.composites.ClasseGroupeId;
import com.iamniaina34.studentmanagerserver.models.ClasseGroupe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseGroupeRepository extends JpaRepository<ClasseGroupe, ClasseGroupeId> {
}
