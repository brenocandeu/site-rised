// Seleciona todos os links de navegação e todas as seções com ID
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main[id], section[id]');
const headerHeight = document.querySelector('.site-header').offsetHeight;

// Função que será executada durante o scroll
const highlightNavOnScroll = () => {
  // Pega a posição atual do scroll vertical
  let scrollY = window.pageYOffset;

  // Itera sobre cada seção para verificar qual está na tela
  sections.forEach((currentSection) => {
    // Pega a altura e a posição do topo da seção
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - headerHeight - 20; //-20 para um pequeno offset

    // Pega o ID da seção atual
    const sectionId = currentSection.getAttribute('id');

    // Verifica se a posição do scroll está dentro dos limites da seção atual
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Se estiver, encontra o link correspondente e adiciona a classe 'active'
      document
        .querySelector('.main-nav a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      // Se não, remove a classe 'active'
      document
        .querySelector('.main-nav a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
};

// Adiciona o "ouvinte" de scroll para executar a função
window.addEventListener('scroll', highlightNavOnScroll);
