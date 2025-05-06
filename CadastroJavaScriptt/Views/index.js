import { render } from "./eventos-view.js";
import { createForm } from "./form-view.js";

window.addEventListener('DOMContentLoaded', async () => {
    init();
    console.log("index.js carregado");

    await render();
});

function init(){
    const app = document.getElementById("app");

    const header = createHeader();

    const main = document.createElement('main');
    main.id = 'main-content';

    app.appendChild(header);
    app.appendChild(main);

}

function createHeader(){
    const header = document.createElement('header');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Lista de Eventos';

   const formBtn = document.createElement('button');
   formBtn.textContent = 'Adicionar Evento';

   formBtn.addEventListener('click', event => {
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(createForm());

   })

    header.appendChild(pageTitle);
    header.appendChild(formBtn);

    return header;
}
