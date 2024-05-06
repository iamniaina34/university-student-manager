package com.iamniaina34.studentmanagerserver.repositories;

import com.iamniaina34.studentmanagerserver.models.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant, String> {
}
