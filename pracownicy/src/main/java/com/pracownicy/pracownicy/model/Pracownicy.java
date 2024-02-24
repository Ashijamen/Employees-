package com.pracownicy.pracownicy.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
public class Pracownicy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_pracownika;

    private String imie;
    private int dzial;
    private int zarobki;

    @Temporal(TemporalType.DATE)
    private Date data_urodzenia;

    private String nazwa_dzial;

    public Pracownicy() {
    }

    public int getId_pracownika() {
        return id_pracownika;
    }

    public void setId_pracownika(int id_pracownika) {
        this.id_pracownika = id_pracownika;
    }

    public String getImie() {
        return imie;
    }

    public void setImie(String imie) {
        this.imie = imie;
    }

    public int getDzial() {
        return dzial;
    }

    public void setDzial(int dzial) {
        this.dzial = dzial;
    }

    public int getZarobki() {
        return zarobki;
    }

    public void setZarobki(int zarobki) {
        this.zarobki = zarobki;
    }

    public Date getData_urodzenia() {
        return data_urodzenia;
    }

    public void setData_urodzenia(Date data_urodzenia) {
        this.data_urodzenia = data_urodzenia;
    }

    public String getNazwa_dzial() {
        return nazwa_dzial;
    }

    public void setNazwa_dzial(String nazwa_dzial) {
        this.nazwa_dzial = nazwa_dzial;
    }
}