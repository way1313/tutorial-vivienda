function cambiarTema() {
    TemaActivo = document.documentElement.classList.contains("tema-oscuro");

    if(TemaActivo) {
        document.documentElement.classList.remove("tema-oscuro");
        document.getElementById("btn-tema").textContent = "Modo Oscuro";
    }else {
        document.documentElement.classList.add("tema-oscuro");
        document.getElementById("btn-tema").textContent = "Modo Claro";
    }
}

document.getElementById('form-contacto')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    
    // Captura datos
    const nombre = document.getElementById('nombre').value;
    
    // Simulación de envío de datos
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`);
    
    // Limpiar formulario
    this.reset();
});
