function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.style.opacity = 0;
        setTimeout(() => (seccion.style.display = 'none'), 300);
    });

    const seccionActiva = document.getElementById(seccionId);
    setTimeout(() => {
        seccionActiva.style.display = 'block';
        setTimeout(() => (seccionActiva.style.opacity = 1), 50);
    }, 300);
}

function abrirVisor(imagen) {
    const visor = document.getElementById('visor');
    const visorImagen = document.getElementById('visorImagen');
    visorImagen.src = imagen.src;
    visor.style.display = 'flex';
}

function cerrarVisor() {
    document.getElementById('visor').style.display = 'none';
}

