// Seleciona o header no documento
const header = document.querySelector('.site-header');

// Define uma altura de scroll a partir da qual o header mudará de estilo
const scrollThreshold = 50; // 50 pixels

// Função que verifica a posição do scroll e adiciona/remove a classe
const handleScroll = () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
};

// Adiciona um "ouvinte" que executa a função sempre que a página é rolada
window.addEventListener('scroll', handleScroll);
