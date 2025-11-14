// assets/js/forms.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-cadastro');
  if (!form) return; // segurança

  const msgForm = document.getElementById('msg-form');

  const fields = {
    nome: document.getElementById('nome'),
    email: document.getElementById('email'),
    cpf: document.getElementById('cpf'),
    telefone: document.getElementById('telefone'),
    nascimento: document.getElementById('nascimento'),
    cep: document.getElementById('cep'),
    endereco: document.getElementById('endereco'),
    cidade: document.getElementById('cidade'),
    estado: document.getElementById('estado'),
    tipo: document.getElementById('tipo'),
    lgpd: document.getElementById('lgpd')
  };

  function limparErros() {
    form.querySelectorAll('.field--erro').forEach(div => {
      div.classList.remove('field--erro');
    });
  }

  function marcarErro(campoId, mensagem, listaErros) {
    const campo = fields[campoId];
    if (campo) {
      const wrapper = campo.closest('.field') || campo.closest('.card');
      if (wrapper) {
        wrapper.classList.add('field--erro');
      }
    }
    listaErros.push(mensagem);
  }

  function validarFormulario() {
    const erros = [];
    limparErros();

    // Nome
    if (!fields.nome.value.trim() || fields.nome.value.trim().length < 3) {
      marcarErro('nome', 'Informe um nome com pelo menos 3 letras.', erros);
    }

    // E-mail
    if (!fields.email.value.trim() || !fields.email.checkValidity()) {
      marcarErro('email', 'Informe um e-mail válido.', erros);
    }

    // CPF (apenas tamanho, para simplificar)
    const cpfLimpo = fields.cpf.value.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      marcarErro('cpf', 'CPF deve ter 11 dígitos (apenas números).', erros);
    }

    // Telefone
    const telLimpo = fields.telefone.value.replace(/\D/g, '');
    if (telLimpo.length < 10) {
      marcarErro('telefone', 'Telefone incompleto.', erros);
    }

    // Data de nascimento + idade mínima
    if (!fields.nascimento.value) {
      marcarErro('nascimento', 'Informe a data de nascimento.', erros);
    } else {
      const hoje = new Date();
      const nasc = new Date(fields.nascimento.value);
      let idade = hoje.getFullYear() - nasc.getFullYear();
      const m = hoje.getMonth() - nasc.getMonth();
      if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
        idade--;
      }
      if (idade < 16) {
        marcarErro('nascimento', 'Você precisa ter pelo menos 16 anos.', erros);
      }
    }

    // CEP
    const cepLimpo = fields.cep.value.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
      marcarErro('cep', 'CEP deve ter 8 dígitos.', erros);
    }

    // Endereço
    if (!fields.endereco.value.trim()) {
      marcarErro('endereco', 'Informe o endereço completo.', erros);
    }

    // Cidade
    if (!fields.cidade.value.trim()) {
      marcarErro('cidade', 'Informe a cidade.', erros);
    }

    // Estado
    if (!fields.estado.value) {
      marcarErro('estado', 'Selecione o estado.', erros);
    }

    // Tipo
    if (!fields.tipo.value) {
      marcarErro('tipo', 'Selecione se você é voluntário(a) ou doador(a).', erros);
    }

    // LGPD
    if (!fields.lgpd.checked) {
      marcarErro('lgpd', 'Você precisa aceitar a Política de Privacidade.', erros);
    }

    return erros;
  }

  // Validação "on blur" (quando sai do campo)
  Object.values(fields).forEach(input => {
    if (!input || input.type === 'checkbox') return;
    input.addEventListener('blur', () => {
      const erros = validarFormulario();
      if (!erros.length) {
        msgForm.textContent = '';
      }
    });
  });

  // Quando clicar em Enviar
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // impede envio real
    const erros = validarFormulario();

    if (erros.length) {
      msgForm.innerHTML =
        '<strong>Verifique os campos abaixo:</strong><ul>' +
        erros.map(e => `<li>${e}</li>`).join('') +
        '</ul>';

      // se tiver showToast (do app.js), usamos:
      if (typeof showToast === 'function') {
        showToast('Existem erros no formulário.', 'danger');
      }
    } else {
      msgForm.textContent = 'Cadastro enviado com sucesso! (simulação)';
      form.reset();
      limparErros();
      if (typeof showToast === 'function') {
        showToast('Cadastro enviado com sucesso!', 'success');
      }
    }
  });
});
