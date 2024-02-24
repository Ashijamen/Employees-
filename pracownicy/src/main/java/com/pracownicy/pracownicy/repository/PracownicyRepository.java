package com.pracownicy.pracownicy.repository;

import com.pracownicy.pracownicy.model.Pracownicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PracownicyRepository extends JpaRepository<Pracownicy, Integer>{
}