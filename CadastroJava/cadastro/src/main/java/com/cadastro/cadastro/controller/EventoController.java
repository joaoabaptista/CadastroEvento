package com.cadastro.cadastro.controller;

import com.cadastro.cadastro.model.Evento;
import com.cadastro.cadastro.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class EventoController {

    @Autowired
    private EventoRepository er;

    @GetMapping("/eventos")
    public Iterable<Evento> listarEventos() {
        return er.findAll();
    }

    @PostMapping("/cadastrarEvento")
    public Evento cadastrarEvento(@RequestBody Evento evento) {
        return er.save(evento); // retorna o evento como JSON
    }

    @DeleteMapping("/eliminarEvento/{id}")
    public void deletarEvento(@PathVariable Integer id) {
        er.deleteById(id);
    }
}
