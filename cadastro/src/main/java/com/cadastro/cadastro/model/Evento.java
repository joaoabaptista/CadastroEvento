package com.cadastro.cadastro.model;

import jakarta.persistence.*;

@Entity
@Table(name = "EVENTO")
public class Evento {

    //Quais as propriedades do meu evento? Nome, local, data, horario

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private String nome;

    private String local;

    private String data;

    private String horario;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }
}
