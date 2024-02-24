package com.pracownicy.pracownicy.service;

import com.pracownicy.pracownicy.model.Pracownicy;
import com.pracownicy.pracownicy.repository.PracownicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PracownicyServiceImpl implements PracownicyService {

    @Autowired
    private PracownicyRepository pracownicyRepository;


    @Override
    public Pracownicy savePracownicy(Pracownicy pracownicy) {
        return pracownicyRepository.save(pracownicy);
    }

    @Override
    public List<Pracownicy> getAllPracownicy() {
        return pracownicyRepository.findAll();
    }

    @Override
    public Pracownicy getPracownikById(int id) {
        return pracownicyRepository.findById(id).orElse(null);
    }
    @Override
    public Pracownicy deletePracownikById(int id) {
        Optional<Pracownicy> pracownikToDelete = pracownicyRepository.findById(id);

        if (pracownikToDelete.isPresent()) {
            pracownicyRepository.delete(pracownikToDelete.get());
            return pracownikToDelete.get();
        } else {
            return null;
        }
    }
}
