package com.iamniaina34.studentmanagerserver.repositories;

import com.iamniaina34.studentmanagerserver.models.Groupe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupeRepository extends JpaRepository<Groupe, Integer> {
    // Declare custom methods here
}
