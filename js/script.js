const botaoTema = document.getElementById('botao-tema');
const menu = document.getElementById('menu');

// tema claro ou escuro
function aplicarTema(tema) {
  document.documentElement.setAttribute('data-bs-theme', tema);
  botaoTema.textContent = tema === 'dark' ? 'Tema claro' : 'Tema escuro';
}

// recupera a última escolha de quem tá no site
aplicarTema(localStorage.getItem('tema') || 'light');

botaoTema.addEventListener('click', function () {
  const temaAtual = document.documentElement.getAttribute('data-bs-theme');
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
  aplicarTema(novoTema);
  localStorage.setItem('tema', novoTema);
});

// fecha o menu do celular dps de clicar em um link
document.querySelectorAll('#menu .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
