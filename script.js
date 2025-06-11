//Carrusel FAQ
document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".faq-item");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  function updateCarousel() {
    const offset = currentIndex * (items[0].offsetWidth + 32);
    track.style.transform = `translateX(-${offset}px)`;
    items.forEach((item, index) => {
      item.classList.remove("active");
      if (index === currentIndex || index === currentIndex + 1 || index === currentIndex - 1) {
        item.style.opacity = index === currentIndex ? "1" : "0.5";
        item.style.transform = index === currentIndex ? "scale(1)" : "scale(0.95)";
      }
    });
    if (items[currentIndex]) items[currentIndex].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 5000);

  updateCarousel();
});

//Video flotante (demo)
document.addEventListener("DOMContentLoaded", function () {
  const botonVerDemo = document.getElementById("verDemo");
  const contenedorVideo = document.getElementById("videoContainer");
  const botonCerrar = document.getElementById("cerrarVideo");

  botonVerDemo.addEventListener("click", function (e) {
    e.preventDefault();
    contenedorVideo.style.display = "block";
  });

  botonCerrar.addEventListener("click", function () {
    contenedorVideo.style.display = "none";
    const video = contenedorVideo.querySelector("video");
    video.pause(); // Pausar el video al cerrar
    video.currentTime = 0; // Reiniciar desde el inicio
  });
});


