package com.cadastro.cadastro.controller;

import com.cadastro.cadastro.model.Evento;
import com.cadastro.cadastro.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EventoController {

    @Autowired
    private EventoRepository er;

    @GetMapping("/cadastrarEvento")
    public String mostrarCadastro() {
        return "evento/eventoForm";
    }

    @PostMapping("/cadastrarEvento")
    public String form(Evento evento) {

        er.save(evento);

        return "redirect:/cadastrarEvento";
    }

    @RequestMapping("/eventos")
    public ModelAndView listar() {
        ModelAndView mv = new ModelAndView("/index");
        Iterable<Evento> eventos = er.findAll();

        mv.addObject("listaEventos", eventos);
        return mv;
    }
}
