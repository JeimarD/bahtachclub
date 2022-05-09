const d = document;

function contactForm() {
  const $form = d.querySelector(".form");

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(".contact_form_loader"),
      $response = d.querySelector(".contact_form_response");

    $loader.classList.remove("none");
    $form.classList.add("none");

    fetch("https://formsubmit.co/ajax/jeimar1512@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText ||
          "Ocurrio un error al enviar, intenta nuevamente más tarde";
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        $form.reset();
      })
      .finally(() => {
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
          $form.classList.remove("none");
        }, 3000);
      });
  });
}

d.addEventListener("DOMContentLoaded", contactForm());
