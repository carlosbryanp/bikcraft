// Ativar Links do MENU
const links = document.querySelectorAll('.header-menu a');

function menuAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url .includes(href)) {
    link.classList.add('ativo')
  }
}

links.forEach(menuAtivo);

// Ativar Items do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProdutos);


// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa')
  pergunta.setAttribute('aria-expanded', ativa);
}

function perguntaAtiva(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(perguntaAtiva);


// Galera de Bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const imagem = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches
  if (media) {
  galeriaContainer.prepend(imagem);
}
}

function eventosGaleria(imagem) {
  imagem.addEventListener('click', trocarImagem);
  console.log(imagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}