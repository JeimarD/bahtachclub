function initScroll() {
  let query = window.matchMedia("(max-width: 1025px)");

  if (!query.matches) {

    function scroll() {
      ScrollReveal().reveal(".planes", {
        reset: true,
      });
    
      ScrollReveal().reveal(".gimnasio", {
        distance: "700px",
      });
    
      ScrollReveal().reveal(".ejercicio-en-casa", {
        distance: "700px",
      });
    
      ScrollReveal().reveal(".dieta", {
        distance: "700px",
      });
    
      ScrollReveal().reveal(".coach-flex", {
        scale: 0.9,
      });
    }
    document.addEventListener("DOMContentLoaded", scroll());
  } return; 
}

document.addEventListener("DOMContentLoaded", initScroll());


