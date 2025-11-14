(function () {
  const cpf = document.getElementById("cpf");
  const tel = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  function maskCPF(v) {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (!v) return "";
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
  }

  function maskTel(v) {
    v = v.replace(/\D/g, "").slice(0, 11);
    if (v.length <= 10) {
      return v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    }
    return v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
  }

  function maskCEP(v) {
    v = v.replace(/\D/g, "").slice(0, 8);
    if (v.length > 5) {
      return v.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    }
    return v;
  }

  function attachMask(input, fn) {
    if (!input) return;
    input.addEventListener("input", () => {
      const start = input.selectionStart || input.value.length;
      const before = input.value;
      input.value = fn(input.value);
      const diff = input.value.length - before.length;
      input.setSelectionRange(start + diff, start + diff);
    });
  }

  attachMask(cpf, maskCPF);
  attachMask(tel, maskTel);
  attachMask(cep, maskCEP);
})();
