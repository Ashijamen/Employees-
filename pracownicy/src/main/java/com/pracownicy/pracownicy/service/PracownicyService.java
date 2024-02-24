package com.pracownicy.pracownicy.service;

import com.pracownicy.pracownicy.model.Pracownicy;

import java.util.List;

public interface PracownicyService {
    public Pracownicy savePracownicy(Pracownicy pracownicy);
    public List<Pracownicy> getAllPracownicy();

    public Pracownicy getPracownikById(int id);
    public Pracownicy deletePracownikById(int id);

}

