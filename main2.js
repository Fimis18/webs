const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const image = document.querySelector('.imageanabel img'); // Seleccionamos la imagen

let kissCount = 15; // Inicialmente 15 besitos

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');
            }, 500);
            envelope.classList.add("disable-envelope");
        } else {
            letter.classList.add('closing-letter');
            envelope.classList.remove("disable-envelope");
            letter.classList.remove('opened');
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }
});

// Función para crear explosión de besitos 💋 en todas direcciones
function createKissExplosion(x, y) {
    for (let i = 0; i < kissCount; i++) {
        const kiss = document.createElement("span");
        kiss.textContent = "💋";
        kiss.classList.add("kiss");

        document.body.appendChild(kiss);

        // Posicionar el besito en el punto del clic
        kiss.style.left = `${x}px`;
        kiss.style.top = `${y}px`;

        // Ángulo y distancia aleatoria para cada besito
        const angle = Math.random() * 2 * Math.PI; // De 0 a 360 grados
        const distance = Math.random() * 150 + 50; // Distancia de la explosión (50-200px)

        // Calculamos la posición final en base al ángulo y la distancia
        const finalX = Math.cos(angle) * distance;
        const finalY = Math.sin(angle) * distance;

        // Aplicamos propiedades personalizadas para la animación
        kiss.style.setProperty("--final-x", `${finalX}px`);
        kiss.style.setProperty("--final-y", `${finalY}px`);

        // Eliminamos el besito después de 1.5s
        setTimeout(() => {
            kiss.remove();
        }, 1500);
    }
}

// Evento para hacer explotar besitos al hacer clic en la imagen
image.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic en la imagen cierre la carta
    createKissExplosion(e.clientX, e.clientY);

    // Aumentar la cantidad de besitos en cada clic, pero con un límite
    if (kissCount < 100) { // Máximo 100 besitos por explosión
        kissCount += 5;
    }
});
