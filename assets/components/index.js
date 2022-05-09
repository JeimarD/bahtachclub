import menuHamburguesa from "./MenuHambuguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    menuHamburguesa(".panel-btn", ".panel", ".menu_container a")
})