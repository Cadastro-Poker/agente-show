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



// ===== Efeito de cartas piscando no rodapé =====
const suits = document.querySelector('.suits');
if (suits) {
  setInterval(() => {
    suits.style.opacity = suits.style.opacity === '1' ? '0.5' : '1';
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-cadastro');

  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // === Captura dos campos ===
    const nomeInput = form.querySelector('[name="nome"]');
    const emailInput = form.querySelector('[name="email"]');
    const whatsappInput = form.querySelector('[name="whatsapp"]');
    const dataNascimentoInput = form.querySelector('[name="data_nascimento"]');
    const userIdInput = form.querySelector('[name="user_id"]');
    const appInput = form.querySelector('[name="app"]');

    // === Normalizações ===
    const nome = normalizarNome(nomeInput.value);
    const email = emailInput.value.trim().toLowerCase();
    const whatsapp = limparNumero(whatsappInput.value);
    const dataNascimento = dataNascimentoInput.value;
    const userId = userIdInput.value.trim();
    const app = appInput.value;

    // === Validações ===
    if (!nome) {
      alert('Informe seu nome completo.');
      nomeInput.focus();
      return;
    }

    if (!validarEmail(email)) {
      alert('Informe um e-mail válido.');
      emailInput.focus();
      return;
    }

    if (!/^\d{11}$/.test(whatsapp)) {
      alert('O WhatsApp deve conter exatamente 11 números (DDD + número).');
      whatsappInput.focus();
      return;
    }

    if (!dataNascimento) {
      alert('Informe sua data de nascimento.');
      dataNascimentoInput.focus();
      return;
    }

    if (!userId) {
      alert('Informe o ID do usuário.');
      userIdInput.focus();
      return;
    }

    if (!app) {
      alert('Selecione o app.');
      appInput.focus();
      return;
    }

    document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('formCadastro');

  if (!form) {
    console.error('Formulário não encontrado');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 👉 DADOS PRECISAM NASCER AQUI
    const dados = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      whatsapp: document.getElementById('whatsapp').value,
      data_nascimento: document.getElementById('data-nascimento').value,
      enviadoEm: new Date().toISOString()
    };

    console.log('DADOS ENVIADOS:', dados);

    fetch('https://terri-defunct-unidentifiably.ngrok-free.dev/webhook/cadastro-site', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(res => {
      if (!res.ok) throw new Error('Erro no webhook');
      return res.json();
    })
    .then(data => {
      console.log('Resposta do n8n:', data);
    })
    .catch(err => {
      console.error('Erro ao enviar:', err);
    });

  });

});

  // ===== Funções auxiliares =====

  function normalizarNome(nome) {
    return nome
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .map(p =>
        p.charAt(0).toUpperCase() + p.slice(1)
      )
      .join(' ');
  }

  function limparNumero(valor) {
    return valor.replace(/\D/g, '');
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});


