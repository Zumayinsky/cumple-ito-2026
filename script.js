document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');

    // Mantenemos el efecto de abrir/cerrar la tarjeta
    card.addEventListener('click', function() {
        card.classList.toggle('open');
    });

    // --- INICIAMOS LA FIESTA DE CONFETI CONTINUA ---
    createContinuousConfetti();

    function createContinuousConfetti() {
        // Emojis de golf y cumpleaños
        const emojis = ['⛳️', '🏌️‍♂️', '⚪️', '🎉', '🏆', '🎁', '🎂', '🍻'];
        // Colores Zumatek: Rojo, Azul, Blanco
        const colors = ['#E53935', '#1E88E5', '#FFFFFF'];
        
        // Función para crear una sola partícula
        function spawnParticula() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Mezclamos emojis y círculos de colores
            if (Math.random() > 0.5) {
                confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            } else {
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
            }

            // Posición y animación aleatoria
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Más lento (4-7s)
            confetti.style.opacity = Math.random() * 0.5 + 0.5; // Entre 0.5 y 1
            confetti.style.fontSize = Math.random() * 20 + 15 + 'px'; // Entre 15 y 35px
            
            document.body.appendChild(confetti);

            // Limpiamos el DOM después de la animación para no saturar
            setTimeout(() => {
                confetti.remove();
            }, 7000); // 7 segundos, igual que la duración máxima de la animación
        }

        // Creamos partículas continuamente (una cada 100ms)
        setInterval(spawnParticula, 100);
    }
});