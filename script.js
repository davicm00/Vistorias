/* MDA Engenharia — interações sem dependências externas */
(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navlinks');
  menu?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('[data-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.tab;
      document.querySelectorAll('[data-tab]').forEach((item) => item.classList.toggle('active', item === button));
      document.querySelectorAll('[data-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === name));
    });
  });

  document.querySelectorAll('[data-report-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.reportTab;
      document.querySelectorAll('[data-report-tab]').forEach((item) => item.setAttribute('aria-selected', String(item === button)));
      document.querySelectorAll('[data-report-panel]').forEach((panel) => {
        const active = panel.dataset.reportPanel === name;
        panel.hidden = !active;
        panel.classList.toggle('active', active);
        panel.setAttribute('aria-hidden', String(!active));
      });
    });
  });

  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.target || 0);
    let current = 0;
    const tick = () => { current += Math.max(1, Math.ceil(target / 30)); el.textContent = String(Math.min(current, target)); if (current < target) requestAnimationFrame(tick); };
    tick(); observer.unobserve(el);
  }), { threshold: .5 });
  counters.forEach((counter) => observer.observe(counter));

  const form = document.querySelector('#lead-qualification-form');
  if (!form) return;
  const endpoint = form.dataset.endpoint || '';
  const steps = [...form.querySelectorAll('[data-form-step]')];
  const label = form.querySelector('#form-progress-label');
  const bar = form.querySelector('#form-progress-bar');
  const status = form.querySelector('#lead-form-status');
  let currentStep = 1;
  const params = new URLSearchParams(window.location.search);
  const profile = params.get('perfil');
  const profileSelect = form.querySelector('[name="profile"]');
  if (profile && profileSelect?.querySelector(`option[value="${profile}"]`)) profileSelect.value = profile;
  form.querySelector('[name="source_page"]')?.setAttribute('value', window.location.pathname);
  ['utm_source','utm_medium','utm_campaign'].forEach((key) => form.querySelector(`[name="${key}"]`)?.setAttribute('value', params.get(key) || ''));

  function showStep(next) {
    currentStep = Math.max(1, Math.min(3, next));
    steps.forEach((step) => { step.hidden = Number(step.dataset.formStep) !== currentStep; });
    if (label) label.textContent = `Etapa ${currentStep} de 3`;
    if (bar) bar.style.width = `${currentStep * 33.333}%`;
    steps[currentStep - 1]?.querySelector('input,select,textarea')?.focus();
  }
  function validStep() {
    const active = steps[currentStep - 1];
    const required = [...active.querySelectorAll('[required]')];
    const invalid = required.some((field) => field.type === 'radio' ? !active.querySelector(`input[name="${field.name}"]:checked`) : !field.value.trim());
    if (invalid) { status.textContent = 'Preencha os campos obrigatórios para continuar.'; status.className = 'form-status error'; return false; }
    status.textContent = ''; status.className = 'form-status'; return true;
  }
  form.querySelectorAll('.form-next').forEach((button) => button.addEventListener('click', () => { if (validStep()) showStep(currentStep + 1); }));
  form.querySelectorAll('.form-back').forEach((button) => button.addEventListener('click', () => showStep(currentStep - 1)));
  form.addEventListener('submit', async (event) => {
    event.preventDefault(); if (!validStep()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const submit = form.querySelector('[type="submit"]'); submit.disabled = true; status.textContent = 'Enviando sua solicitação...';
    try {
      if (endpoint) { const response = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body:JSON.stringify(data) }); if (!response.ok) throw new Error('endpoint'); }
      const message = encodeURIComponent(['Olá, quero falar sobre uma avaliação técnica.', `Nome: ${data.name}`, `Perfil: ${data.profile}`, `Cidade: ${data.city}`, `Necessidade: ${data.need}`, `Prazo: ${data.timing}`, `Canal: ${data.preferred_channel}`, data.context ? `Contexto: ${data.context}` : '', data.email ? `E-mail: ${data.email}` : ''].filter(Boolean).join(String.fromCharCode(10)));
      const whatsappLink = document.createElement('a');
      whatsappLink.className = 'btn btn-ghost lead-whatsapp-link';
      whatsappLink.href = `https://wa.me/5561993862269?text=${message}`;
      whatsappLink.target = '_blank';
      whatsappLink.rel = 'noopener';
      whatsappLink.textContent = 'Enviar também pelo WhatsApp (opcional) →';
      status.replaceChildren(document.createTextNode('Formulário enviado ao Formspree. Se preferir, você pode encaminhar uma cópia pelo WhatsApp: '), whatsappLink);
      status.className = 'form-status success'; form.reset(); showStep(1);
    } catch (error) { status.textContent = 'Não foi possível enviar agora. Fale diretamente pelo WhatsApp ou tente novamente.'; status.className = 'form-status error'; }
    finally { submit.disabled = false; }
  });
})();
