package com.pracownicy.pracownicy.controler;

import com.pracownicy.pracownicy.model.Pracownicy;
import com.pracownicy.pracownicy.service.PracownicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/pracownicy")
@CrossOrigin
public class PracownicyKontroler {

    @Autowired
    private PracownicyService pracownicyService;

    @PostMapping("/add")
    public String add(@RequestBody Pracownicy pracownicy){
        pracownicyService.savePracownicy((pracownicy));
        return "Dodano nowego pracownika";
    }

    @GetMapping("/getAll")
    public List<Pracownicy> getAllPracownicy(){
        return pracownicyService.getAllPracownicy();

    }

    @GetMapping("/get/{id}")
    public Pracownicy getPracownikById(@PathVariable int id) {
        return pracownicyService.getPracownikById(id);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePracownikById(@PathVariable int id) {
        Pracownicy pracownikToDelete = pracownicyService.deletePracownikById(id);

        if (pracownikToDelete != null) {
            return ResponseEntity.ok("Usunięto pracownika o ID: " + id);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nie znaleziono pracownika o ID: " + id);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Pracownicy> updatePracownik(@PathVariable int id, @RequestBody Pracownicy updatedPracownik) {
        Pracownicy existingPracownik = pracownicyService.getPracownikById(id);

        if (existingPracownik != null) {
            existingPracownik.setImie(updatedPracownik.getImie());
            existingPracownik.setDzial(updatedPracownik.getDzial());
            existingPracownik.setZarobki(updatedPracownik.getZarobki());
            existingPracownik.setData_urodzenia(updatedPracownik.getData_urodzenia());
            existingPracownik.setNazwa_dzial(updatedPracownik.getNazwa_dzial());

            Pracownicy updated = pracownicyService.savePracownicy(existingPracownik);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}