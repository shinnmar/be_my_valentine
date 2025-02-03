const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

// Lista de GIFs que quieres mostrar
const gifs = [
  "https://media.tenor.com/rXePenApRK4AAAAj/minecraft.gif",
  "https://media.tenor.com/rXePenApRK4AAAAj/minecraft.gif",
  "https://media.tenor.com/rXePenApRK4AAAAj/minecraft.gif",
];

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Me haces muy feliz! <br> Te amo mucho mucho mucho :3";

  // Crear un contenedor para los GIFs (si no existe)
  let gifContainer = document.querySelector(".gif-container");
  if (!gifContainer) {
    gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");
    wrapper.appendChild(gifContainer);
  }

  // Limpiar GIFs anteriores antes de agregar nuevos
  gifContainer.innerHTML = "";

  // Agregar cada GIF al contenedor
  gifs.forEach((src) => {
    const newGif = document.createElement("img");
    newGif.src = src;
    newGif.classList.add("gif"); // Puedes agregarle estilos con CSS
    gifContainer.appendChild(newGif);
  });

  // Ocultar los botones
  btnGroup.style.display = "none";
});

// Función para mover el botón aleatoriamente
function moveButton() {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Evento mouseover para pantallas grandes
noBtn.addEventListener("mouseover", moveButton);

// Evento táctil para dispositivos pequeños
noBtn.addEventListener("touchstart", (event) => {
  moveButton();
  event.preventDefault();
});

// Ajustar eventos según el tamaño de la pantalla
function handleScreenSizeChange() {
  if (window.innerWidth <= 768) {
    noBtn.removeEventListener("mouseover", moveButton);
  } else {
    noBtn.addEventListener("mouseover", moveButton);
  }
}

window.addEventListener("resize", handleScreenSizeChange);
handleScreenSizeChange();
