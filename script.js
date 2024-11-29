const perritosData = {
    cuidados: [
        { name: "Max", img: "perrito1.jpg" },
        { name: "Bella", img: "perrito2.jpg" },
        { name: "Charlie", img: "perrito3.jpg" },
        { name: "Luna", img: "perrito4.jpg" },
        { name: "Rocky", img: "perrito5.jpg" }
    ],
    camisas: [
        { name: "Buddy", img: "videos/camisa1.mp4" },
        { name: "Molly", img: "perrito7.jpg" },
        { name: "Daisy", img: "perrito8.jpg" },
        { name: "Bailey", img: "perrito9.jpg" },
        { name: "Oliver", img: "perrito10.jpg" }
    ],
    satisfaccion: [
        { name: "Sadie", img: "perrito11.jpg" },
        { name: "Toby", img: "perrito12.jpg" },
        { name: "Zoey", img: "perrito13.jpg" },
        { name: "Maggie", img: "perrito14.jpg" },
        { name: "Winston", img: "perrito15.jpg" }
    ]
};

function showPerritos(category) {
    const container = document.getElementById("perritos-content");
    container.innerHTML = "";
    perritosData[category].forEach(perrito => {
        const card = document.createElement("div");
        card.classList.add("perrito-card");
        card.innerHTML = `
            <img src="${perrito.img}" alt="${perrito.name}">
            <h5>${perrito.name}</h5>
        `;
        container.appendChild(card);
    });
    document.getElementById("perritos-container").style.display = "flex";
}

function closePerritos() {
    document.getElementById("perritos-container").style.display = "none";
}

document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        button.innerHTML = button.classList.contains('liked') ? 
            '<i class="fas fa-heart"></i> Te gusto' : 
            '<i class="fas fa-heart"></i> Me gusta <3 ';
    });
});

// Función para crear el corazón flotante al hacer clic en "Me gusta"
function animateHeart(button) {
    // Crear el div del corazón
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';  // Corazón
    heart.classList.add('heart-float');
    
    // Obtener la posición del botón para posicionar el corazón sobre él
    const buttonRect = button.getBoundingClientRect();
    const heartPositionX = buttonRect.left + buttonRect.width / 2;
    const heartPositionY = buttonRect.top;

    // Posicionar el corazón justo en el centro del botón
    heart.style.left = `${heartPositionX - -35 }px`;  // Ajustamos la posición horizontal
    heart.style.top = `${heartPositionY - -300}px`;   // Ajustamos la posición vertical
    
    // Agregar el corazón al body
    document.body.appendChild(heart);
    
    // Eliminar el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Función para mostrar el modal de "Camisas Especiales"
function showCamisaModal() {
    document.getElementById("camisaModal").style.display = "block";
}

// Función para cerrar el modal
function closeCamisaModal() {
    document.getElementById("camisaModal").style.display = "none";
    // Detener el video cuando se cierra el modal
    const videoElement = document.getElementById("camisa-video");
    videoElement.pause();
    videoElement.currentTime = 0; // Resetea el video al principio
}

// Función para reproducir el video cuando se hace clic en la imagen
function playVideo() {
    document.getElementById("videoContainer").style.display = "block"; // Muestra el video
    const videoElement = document.getElementById("camisa-video");
    videoElement.play(); // Reproduce el video
}
