// Obtener elementos del DOM
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

// Variable para almacenar la posición anterior del desplazamiento
let prevScrollPos = window.pageYOffset;

// Función para controlar el desplazamiento
const handleScroll = () => {
  // Obtener la posición actual del desplazamiento
  const currentScrollPos = window.pageYOffset;

  // Comprobar la dirección del desplazamiento
  if (prevScrollPos > currentScrollPos) {
    // Desplazamiento hacia arriba
    menu.style.top = "0";
  } else {
    // Desplazamiento hacia abajo
    menu.style.top = `-${menu.offsetHeight}px`;
  }

  // Actualizar la posición anterior del desplazamiento
  prevScrollPos = currentScrollPos;
};

// Función para mostrar el menú
const showMenu = () => {
  menuItems.forEach((item, index) => {
    item.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
  });
};

// Función para ocultar el menú
const hideMenu = () => {
  menuItems.forEach((item) => {
    item.style.animation = "";
  });
};

// Evento de desplazamiento
window.addEventListener("scroll", handleScroll);

// Evento al cargar la página
window.addEventListener("load", showMenu);

// Evento al salir de la página
window.addEventListener("beforeunload", hideMenu);

function iniciodesesion() {
  var registerSection = document.getElementById("register-section");
  var mainSections = document.querySelectorAll("main > section");

  // Ocultar todas las secciones principales
  mainSections.forEach(function (section) {
    section.style.display = "none";
  });

  // Mostrar la sección de inicio de sesión
  registerSection.style.display = "block";
}
