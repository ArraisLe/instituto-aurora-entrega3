(function () {
    // Menu hamburguer
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        const expanded = menu.classList.contains("show");
        toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      });
    }
  
    // Dropdown
    document.querySelectorAll(".dropdown").forEach((dd) => {
      const btn = dd.querySelector("button");
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        dd.classList.toggle("open");
      });
      document.addEventListener("click", (e) => {
        if (!dd.contains(e.target)) dd.classList.remove("open");
      });
    });
  
    // Toast helper
    window.showToast = function (message, type = "info") {
      const stack =
        document.querySelector(".toast-stack") ||
        (function () {
          const s = document.createElement("div");
          s.className = "toast-stack";
          document.body.appendChild(s);
          return s;
        })();
  
      const el = document.createElement("div");
      el.className = "toast";
      el.textContent = message;
      stack.appendChild(el);
      setTimeout(() => el.remove(), 3500);
    };
  
    // Formulário: feedback de envio
    const form = document.getElementById("form-cadastro");
    const msg = document.getElementById("msg-form");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        if (!form.checkValidity()) {
          e.preventDefault();
          form.reportValidity();
          if (msg) msg.textContent = "Por favor, confira os campos destacados.";
          return;
        }
        e.preventDefault();
        if (msg) msg.textContent = "Cadastro enviado com sucesso! (simulação)";
        showToast("Cadastro enviado com sucesso! (simulação)", "success");
        form.reset();
      });
    }
  })();
  