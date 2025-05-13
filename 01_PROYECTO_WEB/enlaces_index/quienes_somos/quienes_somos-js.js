// Seleccionar todos los elementos con la clase "persona"
const personas = document.querySelectorAll(".persona");

// Iterar en cada elemento y agregar los eventos
personas.forEach((persona) => {
    // Guardar el contenido original para restaurarlo más adelante
    const contenidoOriginal = persona.querySelector("p").textContent;

    // Evento al pasar el ratón (hover)
    persona.addEventListener("mouseenter", () => {
        persona.querySelector("p").textContent = "Texto cambiado";
    });

    // Evento al salir del ratón
    persona.addEventListener("mouseleave", () => {
        persona.querySelector("p").textContent = contenidoOriginal;
    });
});