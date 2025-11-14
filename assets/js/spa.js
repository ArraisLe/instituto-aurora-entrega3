// assets/js/spa.js
(function () {
  // 1. Templates (HTML dentro de strings)
  const templates = {
    inicio: `
      <h3 class="h3">Bem-vindo(a) ao Instituto Aurora</h3>
      <p>Esta área é um exemplo de SPA: você troca o conteúdo sem recarregar a página.</p>
      <p class="text-muted">Use os botões acima para ver Projetos ou Depoimentos.</p>
    `,
    projetos: `
      <h3 class="h3">Projetos em destaque</h3>
      <ul>
        <li>Reforço Escolar – apoio para crianças do ensino fundamental.</li>
        <li>Mulheres em Tech – oficinas de programação para jovens mulheres.</li>
        <li>Cultura em Movimento – atividades artísticas em comunidades.</li>
      </ul>
    `,
    depoimentos: `
      <h3 class="h3">Depoimentos</h3>
      <p>"Participar do Instituto Aurora mudou minha vida." — Ana, voluntária.</p>
      <p>"Graças ao projeto, meu filho melhorou na escola." — João, responsável.</p>
    `
  };

  // 2. Pegar o lugar onde o conteúdo vai aparecer
  const viewEl = document.getElementById('spa-view');
  const buttons = document.querySelectorAll('.spa-tabs button');

  if (!viewEl || !buttons.length) return; // se não achar, sai quietinho

  // 3. Função que troca o conteúdo
  function render(viewName) {
    const tpl = templates[viewName] || `<p>Conteúdo não encontrado.</p>`;
    viewEl.innerHTML = tpl;
  }

  // 4. Clicar nos botões para trocar a "tela"
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      render(view);

      // marcar botão ativo
      buttons.forEach((b) => b.classList.remove('btn-primary'));
      btn.classList.add('btn-primary');
    });
  });

  // 5. Mostrar uma tela inicial padrão
  render('inicio');
  buttons[0].classList.add('btn-primary');
})();
