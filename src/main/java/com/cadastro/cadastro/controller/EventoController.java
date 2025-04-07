package com.cadastro.cadastro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class EventoController {

    @GetMapping("/cadastrarEvento")
    public String mostrarCadastro() {
        return "evento/eventoForm";
    }

    @PostMapping("/cadastrarEvento")
    public String cadastrarEvento() {

        return null;
    }
}
