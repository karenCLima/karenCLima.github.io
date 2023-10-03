const myCarouselElement = document.querySelector('#carouselExampleCaptions');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
});
console.log(carousel);

// Seleciona o elemento do card
const cardBody = document.querySelector('.card-body');

// Define o conteúdo para cada slide
const slidesContent = [
  {
    title: 'Site de Agendamento de Viagens',
    text: 'Site da empresa fictícia "Viaje Mais" que oferece pacotes de viagem para o Brasil e Exterior com passagem aérea e reserva de hotel.',
    linkText: 'Visite o Site:https://karenclima.github.io/site_de_viagens/',
    imageUrl1: '../assets/imgs/HTML5_Badge.svg.png',
    imageUrl2: '../assets/imgs/CSS3_logo.svg.png',
    imageUrl3: '../assets/imgs/javascript.svg',
    imageUrl4: '../assets/imgs/bootstrap.svg',
    linkUrl: 'https://karenclima.github.io/site_de_viagens/"'
  },
  {
    title: 'Site Cardapio do Restaurante',
    text: 'Site do Restaurante fictício "Reina". Um restaurante de alta gastronomia que disponibiliza um cardápio online para entrega e um mapa do endereço.',
    linkText: 'Visite o site: https://karenclima.github.io/site_cardapio_ElasNaTech/',
    imageUrl1: '../assets/imgs/HTML5_Badge.svg.png',
    imageUrl2: '../assets/imgs/CSS3_logo.svg.png',
    linkUrl: 'https://karenclima.github.io/site_cardapio_ElasNaTech/'
  },
  {
    title: 'Site da ODS - Água e Saneamento',
    text: 'Site contendo informações sobre o 6° Objetivo de Desenvolvimento Sustentávels da Onu. O site é uma explicação de um dos   17 Objetivos de Desenvolvimento Sustentável (ODS) da ONU  que são um incentivo a ações globais para erradicar com a pobreza, proteger o meio ambiente e o clima e garantir direitos básicos as pessoas de todos os lugares do mundo.',
    linkText: 'Visite o site: https://karenclima.github.io/ODS_ElasNaTech_desafioFinal/',
    imageUrl1: '../assets/imgs/HTML5_Badge.svg.png',
    imageUrl2: '../assets/imgs/CSS3_logo.svg.png',
    linkUrl: 'https://karenclima.github.io/ODS_ElasNaTech_desafioFinal/'
  }
];

// Ouve o evento 'slid.bs.carousel' que é acionado sempre que o slide muda
myCarouselElement.addEventListener('slid.bs.carousel', event => {
  // Obtém o índice do slide ativo após a mudança de slide
  const slideIndex = event.to;
  console.log(slideIndex);

  // Obtém o conteúdo do slide com base no índice
  const slideContent = slidesContent[slideIndex];
  console.log(slideIndex);
  if(slideIndex == 0){
  // Atualiza o card com o conteúdo do slide
  cardBody.innerHTML = `
    <h3 class="texto">${slideContent.title}</h3>
    <p class="texto">${slideContent.text}</p>
    <a class="texto" href="${slideContent.linkUrl}">${slideContent.linkText}</a><br>
    <img class="mini-badges" src="${slideContent.imageUrl1}" alt="${slideContent.title}">
    <img class="mini-badges" src="${slideContent.imageUrl2}" alt="${slideContent.title}">
    <img class="mini-badges" src="${slideContent.imageUrl3}" alt="${slideContent.title}">
    <img class="mini-badges" src="${slideContent.imageUrl4}" alt="${slideContent.title}">
  `;
  } else{
    // Atualiza o card com o conteúdo do slide
    cardBody.innerHTML = `
    <h3 class="texto">${slideContent.title}</h3>
    <p class="texto">${slideContent.text}</p>
    <a class="texto" href="${slideContent.linkUrl}">${slideContent.linkText}</a><br>
    <img class="mini-badges" src="${slideContent.imageUrl1}" alt="${slideContent.title}">
    <img class="mini-badges" src="${slideContent.imageUrl2}" alt="${slideContent.title}">
  `;
  }
});

function aparecerMensagem(){
  alert("Mensagem enviada! \nObrigada por entrar em contato!")
}

