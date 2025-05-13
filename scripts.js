// Menú desplegable
const desplegable = document.querySelector('.desplegable');
const capaSuperpuesta = document.getElementById('capa-superpuesta');

if (desplegable && capaSuperpuesta) {
    const botonDesplegable = desplegable.querySelector('.boton-desplegable');

    botonDesplegable.addEventListener('mouseenter', () => {
        capaSuperpuesta.style.display = 'block';
        botonDesplegable.setAttribute('aria-expanded', 'true');
    });

    desplegable.addEventListener('mouseleave', () => {
        capaSuperpuesta.style.display = 'none';
        botonDesplegable.setAttribute('aria-expanded', 'false');
    });

    capaSuperpuesta.addEventListener('click', () => {
        capaSuperpuesta.style.display = 'none';
        botonDesplegable.setAttribute('aria-expanded', 'false');
    });
}

// Gestión de modal unificada
const modal = document.getElementById('modalImagen');
const modalImg = document.getElementById('modalImg');
const cerrarModalBtn = document.getElementById('cerrarModal');

// Función para abrir el modal
function openModal(imgSrc, imgAlt) {
    if (modal && modalImg) {
        modal.style.display = 'flex'; // Usar flex para mostrar el modal
        modalImg.src = imgSrc;
        modalImg.alt = imgAlt;
        document.body.style.overflow = 'hidden'; // Evita el scroll del body
    }
}

// Función para cerrar el modal
function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restablece el scroll del body
    }
}

// Eventos para las imágenes secundarias de la publicación
const imagenesSecundarias = document.querySelectorAll('.imagenes-secundarias-publicacion img');
imagenesSecundarias.forEach(img => {
    img.addEventListener('click', () => {
        openModal(img.src, img.alt);
    });
});

// Eventos para las imágenes de marca
const imagenesMarca = document.querySelectorAll('.imagen-marca');
imagenesMarca.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
        openModal(img.src, img.alt);
    });
});

// Evento para cerrar el modal haciendo clic en el botón de cerrar
if (cerrarModalBtn) {
    cerrarModalBtn.addEventListener('click', closeModal);
}

// Evento para cerrar el modal haciendo clic fuera de la imagen
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Evento para cerrar el modal con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}
