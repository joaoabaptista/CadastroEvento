import { deleteEvento, getEventos } from "../Service/eventos-service.js";

export async function render() {
    const main = document.getElementById('main-content');
    main.innerHTML = ""; // Apaga o conteúdo prévio

    try {
        const events = await getEventos();
        console.log("Eventos recebidos para renderizar:", events);  // Verifique se os dados estão corretos
        const eventosList = createEventosTable(events);
        main.appendChild(eventosList);
    } catch (error) {
        main.innerHTML = `<p>Erro ao carregar Eventos: ${error.message}</p>`;
        console.error("Erro ao listar eventos:", error);  // Exibe o erro completo no console
    }
}


function createEventosTable(eventos){

    const eventosTable = document.createElement('table');


    //Cabeçalho
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr'); 

    ['Nome', 'Data', 'Local', 'Horario'].forEach(titulo => {
        const th = document.createElement('th');
        th.textContent = titulo;
        headerRow.appendChild(th);
    })

    thead.appendChild(headerRow);
    eventosTable.appendChild(thead);



     // Corpo da tabela
     const tbody = document.createElement('tbody');

     eventos.forEach(evento => {
        console.log("Evento:", evento);
        const row = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.textContent = evento.nome;

        const tdData = document.createElement('td');
        tdData.textContent = evento.data;

        const tdLocal = document.createElement('td');
        tdLocal.textContent = evento.local;

        const tdHorario = document.createElement('td');
        tdHorario.textContent = evento.horario;

        const tdDelete = document.createElement('td');
        const deleteBtn = btnDelete(evento);
        tdDelete.appendChild(deleteBtn);

        row.appendChild(tdNome);
        row.appendChild(tdData);
        row.appendChild(tdLocal);
        row.appendChild(tdHorario);
        row.appendChild(tdDelete);

        tbody.appendChild(row);
     })

     eventosTable.appendChild(tbody);

     return eventosTable;
}

function btnDelete(evento) {
    const btn = document.createElement('button');
    btn.textContent = 'Delete';

    btn.addEventListener('click', () => {
        deleteEvento(evento)
            .then(() => {
                console.log('Evento deletado com sucesso');
                btn.closest('tr').remove();
            })
            .catch((error) => {
                console.error('Erro ao deletar evento:', error);
            });
    });

    return btn;
}