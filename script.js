// script.js

// ===== Scroll suave para seções =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Botão de cadastro com animação =====
const cadastroBtn = document.querySelector('#cadastro button');
if (cadastroBtn) {
  cadastroBtn.addEventListener('mouseenter', () => {
    cadastroBtn.style.transform = 'scale(1.05)';
    cadastroBtn.style.boxShadow = '0 0 20px rgba(124,58,237,0.6)';
  });
  cadastroBtn.addEventListener('mouseleave', () => {
    cadastroBtn.style.transform = 'scale(1)';
    cadastroBtn.style.boxShadow = 'none';
  });
}

// ===== Destaque dinâmico nas estatísticas =====
const stats = document.querySelectorAll('.hero__stats span');
stats.forEach(stat => {
  stat.addEventListener('mouseover', () => {
    stat.style.color = '#7c3aed';
    stat.style.fontWeight = 'bold';
  });
  stat.addEventListener('mouseout', () => {
    stat.style.color = '';
    stat.style.fontWeight = '';
  });
});

// ===== Carrossel horizontal com setas =====
const scrollContainer = document.querySelector('.scroll-cards');
if (scrollContainer) {
  const leftBtn = document.createElement('button');
  const rightBtn = document.createElement('button');
  leftBtn.textContent = '◀';
  rightBtn.textContent = '▶';
  leftBtn.className = 'scroll-btn left';
  rightBtn.className = 'scroll-btn right';
  scrollContainer.parentElement.appendChild(leftBtn);
  scrollContainer.parentElement.appendChild(rightBtn);

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });
  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// ===== Formulário com alerta divertido =====
const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('🎉 Bem-vindo ao Agente Show! Seu cadastro foi enviado com sucesso.');
    form.reset();
  });
}

// ===== Efeito de cartas piscando no rodapé =====
const suits = document.querySelector('.suits');
if (suits) {
  setInterval(() => {
    suits.style.opacity = suits.style.opacity === '1' ? '0.5' : '1';
  }, 800);
}


document.getElementById('formCadastro').addEventListener('submit', function(e) {
  e.preventDefault(); // impede o reload da página

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  fetch('https://n8n.localtest.me/webhook-test/cadastro-site', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      whatsapp: telefone,
      data_nascimento: data_nascimento
    })
  })
  .then(() => {
    alert('Cadastro enviado com sucesso!');
  })
  .catch(() => {
    alert('Erro ao enviar cadastro');
  });
});