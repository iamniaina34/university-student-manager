package com.iamniaina34.studentmanagerserver.repositories;

import com.iamniaina34.studentmanagerserver.models.Classe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Integer> {
}
