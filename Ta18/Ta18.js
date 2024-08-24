document.addEventListener("DOMContentLoaded", function() {
    const personas = ["Juana", "María", "Felipe", "Mateo", "Agustín", "Marta"];
    const listaPersonas = document.getElementById("listaPersonas");
    const buscar = document.getElementById("buscar");
  
    // Función para renderizar la lista de personas
    function renderizarLista(filtrarPersonas) {
        listaPersonas.innerHTML = ""; //Aca hago que se limpie la lista
    
        for (let persona of filtrarPersonas) {
          const li = document.createElement("li");
          li.textContent = persona;
          listaPersonas.appendChild(li);
        }
    }

    renderizarLista(personas);

    // Filtrar la lista mientras se escribe en el input
    buscar.addEventListener("input", function() {
        const buscarTexto = buscar.value.toLowerCase();
        const filtrarPersonas = personas.filter(persona => 
        persona.toLowerCase().includes(buscarTexto)
        );
        renderizarLista(filtrarPersonas);
    });
});
  