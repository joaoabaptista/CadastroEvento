import { getEventos } from "../Service/eventos-service";
import { render } from "../Views/eventos-view";

export async function init(){
    const apiEventos = await getEventos()
    .catch(error => alert(error)
    );
     
    render(apiEventos);
}