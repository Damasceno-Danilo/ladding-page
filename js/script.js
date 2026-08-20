/* =====================================================
   MINA ODONTOLOGIA & ESTÉTICA — Landing Page
   Arquivo: js/script.js
   Descrição: Navegação (menu mobile, header sticky),
   scroll reveal (IntersectionObserver), parallax leve
   e modal de agendamento que monta a mensagem do WhatsApp.
   ===================================================== */

(function(){
var nav = document.getElementById('siteNav');
  var onScroll = function(){
    if(window.scrollY > 40){ nav.classList.add('scrolled'); }
    else{ nav.classList.remove('scrolled'); }
  };
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var burger = document.getElementById('burgerBtn');
  var panel = document.getElementById('mobilePanel');
  function closeMenu(){
    burger.classList.remove('open');
    panel.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', function(){
    var isOpen = panel.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true':'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  panel.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15, rootMargin:'0px 0px -40px 0px' });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('visible'); });
  }

  if(!reduceMotion){
    var watermark = document.querySelector('.hero-watermark');
    if(watermark){
      document.addEventListener('scroll', function(){
        var y = window.scrollY;
        watermark.style.transform = 'translateY(' + Math.min(y*0.12, 60) + 'px)';
      }, { passive:true });
    }
  }

  var yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  /* ---- Modal: Agendar ---- */
  var WHATSAPP_NUMBER = '5511930551419';
  var overlay = document.getElementById('agendarOverlay');
  var closeBtn = document.getElementById('agendarClose');
  var form = document.getElementById('agendarForm');
  var errorBox = document.getElementById('agendarError');
  var lastFocused = null;

  function openModal(){
    lastFocused = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    setTimeout(function(){
      var first = document.getElementById('agendarNome');
      if(first){ first.focus(); }
    }, 200);
  }
  function closeModal(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    errorBox.classList.remove('show');
    if(lastFocused){ lastFocused.focus(); }
  }

  document.querySelectorAll('.js-agendar').forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      closeMenu();
      openModal();
    });
  });
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){
    if(e.target === overlay){ closeModal(); }
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.classList.contains('open')){ closeModal(); }
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nome = document.getElementById('agendarNome').value.trim();
    var telefone = document.getElementById('agendarTelefone').value.trim();
    var servico = document.getElementById('agendarServico').value;
    var mensagem = document.getElementById('agendarMensagem').value.trim();

    if(!nome || !telefone){
      errorBox.classList.add('show');
      return;
    }
    errorBox.classList.remove('show');

    var texto = 'Olá! Meu nome é ' + nome + '.'
      + '\nTenho interesse em: ' + servico + '.'
      + '\nMeu telefone: ' + telefone + '.'
      + (mensagem ? ('\nMensagem: ' + mensagem) : '')
      + '\n\nGostaria de agendar uma avaliação na Mina Odontologia & Estética.';

    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
    window.open(url, '_blank', 'noopener');
    closeModal();
    form.reset();
  });
})();
