const body = document.body;

const btnDark = document.getElementById("btn-dark-mode");
const btnContraste = document.getElementById("btn-alto-contraste");

if (btnDark) {
  btnDark.addEventListener("click", () => {
    const isActive = body.classList.toggle("dark-mode");
    body.classList.remove("high-contrast");

    // Atualiza acessibilidade
    btnDark.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (btnContraste) {
      btnContraste.setAttribute("aria-pressed", "false");
    }
  });
}

if (btnContraste) {
  btnContraste.addEventListener("click", () => {
    const isActive = body.classList.toggle("high-contrast");
    body.classList.remove("dark-mode");

    btnContraste.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (btnDark) {
      btnDark.setAttribute("aria-pressed", "false");
    }
  });
}
