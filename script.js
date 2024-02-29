// Código JavaScript para agregar interactividad

// Ejemplo de funcionalidad: Mostrar el contenido completo de la publicación al hacer clic en "Leer más"
const leerMasEnlaces = document.querySelectorAll("a[href='#']");
leerMasEnlaces.forEach((enlace) => {
  enlace.addEventListener("click", mostrarContenidoCompleto);
});

function mostrarContenidoCompleto(event) {
  event.preventDefault();
  const publicacion = event.target.closest("article");
  const contenido = publicacion.querySelector("p");
  contenido.style.display = "block";
}
