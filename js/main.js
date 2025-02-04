const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

// Función para mover el botón aleatoriamente
// Function to do the button random movement
function moveButton() {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Agregar evento de clic al botón "sip"
yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "Yo también quiero ser tu San Valentin  <br> <br> Te amo mi Cristians :3 <3";
  gif.src = "https://media.tenor.com/rXePenApRK4AAAAj/minecraft.gif";
  //This will hide the buttons that are inside a div, after you have the response
  //Esto oculta a los dos botones tomando el div que los contiene, después de responder la pregunta :3
  btnGroup.style.display = "none";
});

// Mouseover event in big screens
// Evento mouseover para pantallas grandes
noBtn.addEventListener("mouseover", moveButton);

// Touch events for small devices
// Eventos táctiles para dispositivos pequeños
noBtn.addEventListener("touchstart", (event) => {
  moveButton(); // Mover el botón al tocar la pantalla
  event.preventDefault(); // Evitar el comportamiento táctil predeterminado
});

// Evento de clic para pantallas pequeñas (opcional)
noBtn.addEventListener("click", () => {
  moveButton(); // Mover el botón al hacer clic (opcional)
});

// Deshabilitar el evento de mouseover en pantallas pequeñas
// Disable mouseover event in small screens
function handleScreenSizeChange() {
  if (window.innerWidth <= 768) {
    noBtn.removeEventListener("mouseover", moveButton);
  } else {
    noBtn.addEventListener("mouseover", moveButton);
  }
}

// Escuchar cambios en el tamaño de la ventana
// Listen the screen size change
window.addEventListener("resize", handleScreenSizeChange);

// Inicializar el manejo de eventos para el tamaño de pantalla actual
// Start to handle the events for the current screen size
handleScreenSizeChange();
