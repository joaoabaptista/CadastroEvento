export function getEventos() {
    console.log("Fetching eventos from: http://localhost:8080/eventos");
    return fetch("http://localhost:8080/eventos")
        .then((resp) => {
            if (!resp.ok) throw new Error("Error rendering events");
            return resp.json();  // Aqui, vamos ver se a resposta é válida
        })
        .then((data) => {
            console.log("Eventos recebidos:", data);  // Log da resposta
            return data;
        })
        .catch((error) => {
            console.error("Erro ao buscar eventos:", error);
            throw error;
        });
}

export function cadastrarEvento(evento) {
    console.log("Dados enviados:", JSON.stringify(evento));

    return fetch("http://localhost:8080/cadastrarEvento", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(evento)
    })
    .then((resp) => {
        if (!resp.ok) throw new Error("Erro ao cadastrar evento");
        return resp.json();
    });
}

export function deleteEvento(evento) {
    console.log(`Dados a eliminar: ${evento.id}`);

    return fetch(`http://localhost:8080/eliminarEvento/${evento.id}`, {
        method: "DELETE"
    })
    .then((resp) => {
        if (!resp.ok) throw new Error("Erro ao eliminar evento");
        return resp;
    });
}

