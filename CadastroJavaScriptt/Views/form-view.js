import { cadastrarEvento } from "../Service/eventos-service.js";

export function createForm() {
    const form = document.createElement('form');

    // Creating the event name label
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Nome Evento:';
    nameLabel.setAttribute('for', 'event-name');

    // Creating the input for event name
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'event-name';
    nameInput.name = 'nome';
    nameInput.required = true;


        // Creating the event name label
        const localLabel = document.createElement('label');
        localLabel.textContent = 'Local Evento:';
        localLabel.setAttribute('for', 'event-local');
    
        // Creating the input for event name
        const localInput = document.createElement('input');
        localInput.type = 'text';
        localInput.id = 'event-local';
        localInput.name = 'local';
        localInput.required = true;


                // Creating the event name label
                const dateLabel = document.createElement('label');
                dateLabel.textContent = 'Data Evento:';
                dateLabel.setAttribute('for', 'event-date');

                // Creating the input for event name
                const dateInput = document.createElement('input');
                dateInput.type = 'date';
                dateInput.id = 'event-date';
                dateInput.name = 'data';
                dateInput.required = true;


                        // Creating the event name label
                        const horarioLabel = document.createElement('label');
                        horarioLabel.textContent = 'Horario Evento:';
                        horarioLabel.setAttribute('for', 'event-horario');

                        // Creating the input for event name
                        const horarioInput = document.createElement('input');
                        horarioInput.type = 'text';
                        horarioInput.id = 'event-horario';
                        horarioInput.name = 'horario';
                        horarioInput.required = true;

    // Creating the submit button
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submeter';
    submitBtn.type = 'submit';

    // Append the label, input, and button to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    form.appendChild(localLabel);
    form.appendChild(localInput);

    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    form.appendChild(horarioLabel);
    form.appendChild(horarioInput);

    form.appendChild(submitBtn);


    form.addEventListener('submit', event => {
        event.preventDefault();
        if(nameInput && localInput && horarioInput && dateInput){
            const evento = {
                nome: nameInput.value,
                data: dateInput.value,
                local: localInput.value,
                horario: horarioInput.value
                
            }
            cadastrarEvento(evento)
                .then(() => alert("Evento cadastrado com sucesso!"))
                .catch(err => alert("Erro ao cadastrar evento: " + err.message));
        }
    })

    return form;
}