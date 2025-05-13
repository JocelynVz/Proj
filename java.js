
        // Ejemplo básico para mostrar/ocultar capa superpuesta (puedes adaptar para menú móvil)
        const desplegable = document.querySelector('.desplegable');
        const capaSuperpuesta = document.getElementById('capa-superpuesta');
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


         document.addEventListener('DOMContentLoaded', function () {
            new Splide('.splide', {
                type: 'loop',
                perPage: 2,
                gap: '1rem',
                pagination: true,
                arrows: true,
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                breakpoints: {
                    900: {
                        perPage: 1,
                        gap: '0.7rem'
                    },
                    600: {
                        arrows: false,
                        pagination: true
                    }
                }
            }).mount();
        });


        // Gestión de modal mejorada
    const modal = document.getElementById('modalImagen');
    const modalImg = document.getElementById('modalImg');
  
    document.querySelectorAll('.imagenes-secundarias-publicacion img').forEach(img => {
     img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      document.body.style.overflow = 'hidden';
     });
    });
  
    document.getElementById('cerrarModal').addEventListener('click', () => {
     modal.style.display = 'none';
     document.body.style.overflow = 'auto';
    });
  
    modal.addEventListener('click', (e) => {
     if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
     }
    });
  
    document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
     }
    });

    
    document.querySelectorAll('.imagen-marca').forEach(img => {
     img.style.cursor = 'zoom-in';
     img.addEventListener('click', () => {
      modal.classList.add('active');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      document.body.style.overflow = 'hidden';
     });
    });
  
    cerrarModalBtn.addEventListener('click', () => {
     modal.classList.remove('active');
     document.body.style.overflow = 'auto';
    });
  
    modal.addEventListener('click', (e) => {
     if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
     }
    });
  
    document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
     }
    });