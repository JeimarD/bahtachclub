function initSlider() {
  let query = window.matchMedia("(max-width: 1025px)");

  if (!query.matches) {
    const config = {
      type: "carousel",
      autoplay: 4500,
      hoverpause: false,
    };

    new Glide(".glide", config).mount();
  } else {

    return;

  }
}

document.addEventListener("DOMContentLoaded", initSlider());
