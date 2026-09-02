<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MDA Engenharia | Diagnóstico de Segurança Predial e Manutenção</title>
<meta name="description" content="Vistoria técnica gratuita de segurança predial em Anápolis, Goiânia, Brasília e região. Elétrica, hidráulica, PPCI e acompanhamento de obras. CREA 20.853/D-GO | CREA 25.576/D-GO | CREA 1019077042/D-GO.">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:title" content="MDA Engenharia | Diagnóstico de Segurança Predial e Manutenção">
<meta property="og:description" content="Vistoria técnica de segurança predial em Anápolis e região.">
<meta name="theme-color" content="#0F1B2B">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg-dark:#0F1B2B;
    --bg-dark-2:#16273B;
    --paper:#EEF1F0;
    --paper-2:#E4E9E8;
    --ink:#141E2A;
    --line:#C7D0D9;
    --line-dark:#2A3B52;
    --accent:#E8A33D;
    --accent-ink:#3A2607;
    --alert:#C1392B;
    --steel:#6B7A8F;
    --white:#F7F9F8;
    --radius:2px;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{
    font-family:'IBM Plex Sans',sans-serif;
    color:var(--ink);
    background:var(--paper);
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3{font-family:'Space Grotesk',sans-serif;font-weight:700;letter-spacing:-0.01em;}
  .mono{font-family:'IBM Plex Mono',monospace;letter-spacing:0.04em;}
  a{color:inherit;text-decoration:none;}
  .wrap{max-width:1620px;margin:0 auto;padding:0 28px;}
  img,svg{display:block;max-width:100%;}

  /* focus visibility */
  a:focus-visible, button:focus-visible, input:focus-visible{
    outline:2px solid var(--accent); outline-offset:2px;
  }

  /* blueprint grid backdrop for dark sections */
  .blueprint{
    background-color:var(--bg-dark);
    background-image:
      linear-gradient(var(--line-dark) 1px, transparent 1px),
      linear-gradient(90deg, var(--line-dark) 1px, transparent 1px);
    background-size:40px 40px;
    color:var(--white);
    position:relative;
  }
  .blueprint::before{
    content:"";
    position:absolute; inset:0;
    background:radial-gradient(ellipse at 20% 0%, rgba(232,163,61,0.08), transparent 55%);
    pointer-events:none;
  }

  /* corner crop marks, technical drawing feel */
  .crop{position:relative;}
  .crop::before,.crop::after{
    content:"";position:absolute;width:14px;height:14px;
    border-color:var(--accent);border-style:solid;opacity:0.7;
  }
  .crop::before{top:0;left:0;border-width:2px 0 0 2px;}
  .crop::after{bottom:0;right:0;border-width:0 2px 2px 0;}

  /* ---------- HEADER ---------- */
  header{
    position:sticky;top:0;z-index:50;
    background:rgba(15,27,43,0.94);
    backdrop-filter:blur(6px);
    border-bottom:1px solid var(--line-dark);
  }
  .nav{display:flex;align-items:center;justify-content:space-between;padding:16px 28px;max-width:1120px;margin:0 auto;}
  .brand{color:var(--white);font-family:'Space Grotesk';font-weight:700;font-size:1.05rem;display:flex;align-items:center;gap:10px;}
  .brand .mark{width:22px;height:22px;flex:none;}
  .navlinks{display:flex;gap:28px;align-items:center;}
  .navlinks a{color:#C7D2DE;font-size:0.92rem;transition:color .15s;}
  .navlinks a:hover{color:var(--accent);}
  .btn{
    display:inline-flex;align-items:center;gap:8px;
    padding:12px 22px;border-radius:var(--radius);
    font-weight:600;font-size:0.92rem;border:1px solid transparent;
    cursor:pointer;transition:transform .12s ease, box-shadow .12s ease;
  }
  .btn:hover{transform:translateY(-1px);}
  .btn-accent{background:var(--accent);color:var(--accent-ink);}
  .btn-accent:hover{box-shadow:0 6px 18px rgba(232,163,61,0.35);}
  .btn-ghost{border-color:var(--line-dark);color:var(--white);background:transparent;}
  .btn-ghost:hover{border-color:var(--accent);color:var(--accent);}
  .btn-outline-dark{border-color:var(--line);color:var(--ink);background:transparent;}
  .btn-outline-dark:hover{border-color:var(--ink);}
  .btn-sm{padding:9px 16px;font-size:0.85rem;}
  .navcta{display:none;}
  @media(min-width:720px){.navcta{display:inline-flex;}}
  .navlinks{display:none;}
  @media(min-width:900px){.navlinks{display:flex;}}
  css
/* PÁGINAS SEGMENTADAS — preservar paleta técnica atual do site */
.segment-page { background: var(--paper); color: var(--ink); }
.segment-hero { padding: 92px 0 80px; background: var(--bg-dark); color: var(--white); }
.segment-hero .wrap { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(280px, .95fr); gap: 60px; align-items: center; }
.segment-eyebrow { color: var(--accent); font: 500 .76rem/1.2 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .08em; }
.segment-hero h1 { max-width: 720px; margin: 18px 0 20px; font: 700 clamp(2.4rem, 5vw, 4.8rem)/.98 'Space Grotesk', sans-serif; }
.segment-hero h1 em { color: var(--accent); font-style: normal; }
.segment-hero p { max-width: 620px; color: #c7d2de; font-size: 1.06rem; line-height: 1.72; }
.segment-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.segment-actions .btn { display: inline-flex; align-items: center; gap: 8px; }
.segment-slab { padding: 28px; border: 1px solid var(--line-dark); background: rgba(22,39,59,.68); }
.segment-slab .slab-label { color: var(--accent); font: .72rem 'IBM Plex Mono', monospace; letter-spacing: .08em; text-transform: uppercase; }
.segment-slab strong { display: block; margin-top: 15px; color: var(--white); font: 700 2rem/1.08 'Space Grotesk', sans-serif; }
.segment-slab p { margin-top: 12px; font-size: .9rem; }
.segment-proof { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--line); background: var(--paper); }
.segment-proof > div { padding: 24px 28px; border-right: 1px solid var(--line); }
.segment-proof > div:last-child { border-right: 0; }
.segment-proof b { display: block; color: var(--ink); font: 700 .94rem 'Space Grotesk', sans-serif; }
.segment-proof span { display: block; margin-top: 5px; color: var(--steel); font-size: .82rem; }
.segment-content { padding: 84px 0; }
.segment-content .section-head { max-width: 700px; }
.segment-content h2 { margin-top: 12px; font: 700 clamp(1.8rem, 3.5vw, 2.8rem)/1.05 'Space Grotesk', sans-serif; }
.segment-content .lead { max-width: 650px; margin-top: 16px; color: var(--steel); font-size: 1rem; }
.segment-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 42px; border: 1px solid var(--line); background: var(--line); }
.segment-card { min-height: 245px; padding: 28px; background: var(--paper-2); }
.segment-card .num { color: var(--accent); font: .76rem 'IBM Plex Mono', monospace; }
.segment-card h3 { margin: 20px 0 10px; font-size: 1.2rem; }
.segment-card p { color: var(--steel); font-size: .9rem; line-height: 1.65; }
.segment-card ul { padding-left: 18px; margin-top: 13px; color: var(--steel); font-size: .84rem; line-height: 1.7; }
.segment-next { display: flex; align-items: center; justify-content: space-between; gap: 30px; margin-top: 45px; padding: 25px 28px; background: var(--paper); border-left: 3px solid var(--accent); }
.segment-next p { max-width: 720px; color: var(--steel); font-size: .9rem; }
.segment-next strong { color: var(--ink); }
@media (max-width: 760px) {
  .segment-hero { padding: 68px 0 56px; }
  .segment-hero .wrap { grid-template-columns: 1fr; gap: 35px; }
  .segment-hero h1 { font-size: 2.7rem; }
  .segment-proof { grid-template-columns: 1fr; }
  .segment-proof > div { border-right: 0; border-bottom: 1px solid var(--line); }
  .segment-grid { grid-template-columns: 1fr; }
  .segment-next { display: block; }
  .segment-next .btn { margin-top: 18px; }
}
css
/* FORMULÁRIO DE QUALIFICAÇÃO — 3 etapas curtas e sem dependência de backend */
.lead-form { max-width: 820px; margin-top: 35px; padding: 30px; background: var(--paper-2); border: 1px solid var(--line); }
.lead-form fieldset { min-width: 0; padding: 0; border: 0; }
.lead-form legend { font: 700 1.65rem/1.1 'Space Grotesk', sans-serif; }
.form-step-intro { max-width: 600px; margin: 11px 0 28px; color: var(--steel); font-size: .9rem; }
.form-progress { display: grid; gap: 8px; margin-bottom: 31px; color: var(--steel); font: .68rem 'IBM Plex Mono', monospace; text-transform: uppercase; letter-spacing: .06em; }
.form-progress i { height: 3px; display: block; background: var(--line); }
.form-progress b { display: block; width: 33%; height: 100%; background: var(--accent); transition: width .2s ease-out; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.lead-form label { display: grid; gap: 7px; color: var(--ink); font-size: .76rem; font-weight: 600; }
.lead-form input:not([type="radio"]):not([type="checkbox"]), .lead-form select, .lead-form textarea { width: 100%; padding: 12px 13px; color: var(--ink); background: var(--paper); border: 1px solid var(--line); border-radius: 0; font: 400 .86rem 'IBM Plex Sans', sans-serif; }
.lead-form textarea { resize: vertical; min-height: 102px; }
.lead-form input::placeholder, .lead-form textarea::placeholder { color: #8b9299; }
.lead-form input:focus, .lead-form select:focus, .lead-form textarea:focus { outline: 2px solid var(--accent); outline-offset: 1px; border-color: var(--accent); }
.choice-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px; }
.choice { display: flex !important; grid-template-columns: auto 1fr; gap: 11px !important; align-items: flex-start; padding: 14px; background: var(--paper); border: 1px solid var(--line); cursor: pointer; }
.choice:has(input:checked) { background: #f5e4d5; border-color: var(--accent); }
.choice input { margin-top: 3px; accent-color: var(--accent); }
.choice span { display: grid; gap: 4px; }
.choice b { font-size: .8rem; }
.choice small { color: var(--steel); font-size: .72rem; line-height: 1.35; font-weight: 400; }
.wide-label { margin-top: 18px; }
.consent { display: flex !important; grid-template-columns: auto 1fr; align-items: flex-start; gap: 9px !important; margin-top: 22px; color: var(--steel) !important; font-size: .7rem !important; line-height: 1.45; font-weight: 400 !important; }
.consent input { margin-top: 3px; accent-color: var(--accent); }
.lead-form .btn { min-height: 42px; display: inline-flex; align-items: center; justify-content: center; padding: 0 16px; margin-top: 25px; border: 1px solid transparent; font-weight: 600; cursor: pointer; }
.form-navigation { display: flex; justify-content: space-between; gap: 12px; }
.form-navigation .btn { margin-top: 25px; }
.form-status { min-height: 1.2em; margin: 17px 0 0; color: var(--steel); font-size: .8rem; }
.form-status.success { color: #25654f; }.form-status.error { color: #b2291e; }
@media (max-width: 640px) { .lead-form { padding: 21px; }.form-grid, .choice-grid { grid-template-columns: 1fr; }.form-navigation { flex-direction: column-reverse; }.form-navigation .btn { width: 100%; } }

  /* ---------- HERO ---------- */
  .hero{padding:96px 0 88px;}
  .eyebrow{
    display:inline-flex;align-items:center;gap:10px;
    color:var(--accent);font-size:0.78rem;text-transform:uppercase;
    padding-bottom:18px;
  }
  .eyebrow::before{content:"";width:26px;height:1px;background:var(--accent);}
  h1.hero-title{
    font-size:clamp(2.1rem,5vw,3.4rem);
    color:var(--white);
    max-width:760px;
    line-height:1.08;
  }
  .hero-sub{
    margin-top:22px;max-width:600px;color:#C7D2DE;font-size:1.08rem;
  }
  .hero-ctas{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px;}

  .trust-strip{
    margin-top:64px;border-top:1px solid var(--line-dark);padding-top:26px;
    display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px;
  }
  .trust-item{color:#9FB0C4;font-size:0.86rem;display:flex;gap:10px;align-items:flex-start;}
  .trust-item b{color:var(--white);display:block;font-family:'Space Grotesk';font-size:0.95rem;margin-bottom:2px;}
  .trust-dot{color:var(--accent);}

  /* ---------- SECTION HEADERS (paper) ---------- */
  section{padding:84px 0;}
  .sec-label{
    font-size:0.78rem;color:var(--steel);text-transform:uppercase;
    display:flex;align-items:center;gap:10px;margin-bottom:14px;
  }
  .sec-label::before{content:"";width:26px;height:1px;background:var(--steel);}
  h2.sec-title{font-size:clamp(1.6rem,3.4vw,2.3rem);max-width:640px;}
  .sec-desc{max-width:620px;color:var(--steel);margin-top:14px;font-size:1.02rem;}

  /* ---------- RISCOS (tabs) ---------- */
  .riscos{background:var(--paper);}
  .tabbar{display:flex;flex-wrap:wrap;gap:8px;margin-top:38px;border-bottom:1px solid var(--line);padding-bottom:0;}
  .tabbtn{
    padding:12px 18px;font-size:0.88rem;font-weight:600;color:var(--steel);
    background:transparent;border:none;border-bottom:2px solid transparent;cursor:pointer;
    font-family:'IBM Plex Sans';
  }
  .tabbtn.active{color:var(--ink);border-bottom-color:var(--accent);}
  .tabpanel{display:none;padding-top:34px;}
  .tabpanel.active{display:grid;grid-template-columns:1fr;gap:28px;}
  @media(min-width:760px){.tabpanel.active{grid-template-columns:0.9fr 1.1fr;align-items:center;}}
  .risco-list{list-style:none;display:flex;flex-direction:column;gap:14px;}
  .risco-list li{
    display:flex;gap:12px;align-items:flex-start;font-size:0.98rem;
  }
  .risco-list li::before{
    content:"";flex:none;width:8px;height:8px;margin-top:7px;
    background:var(--alert);
  }
  .risco-media{border:1px solid var(--line);background:var(--paper-2);}
  .risco-img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;filter:grayscale(15%) contrast(1.03);}
  .risco-media figcaption{
    font-size:0.72rem;color:var(--steel);padding:10px 12px;border-top:1px solid var(--line);
    letter-spacing:0.06em;
  }

  /* ---------- SOLUÇÃO ---------- */
  .solucao{background:var(--ink);color:var(--white);}
  .solucao .sec-label,.solucao .sec-label::before{color:var(--accent);background:var(--accent);}
  .chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px;}
  .chip{
    font-family:'IBM Plex Mono';font-size:0.82rem;
    border:1px solid var(--line-dark);color:#C7D2DE;
    padding:9px 14px;border-radius:20px;
  }
  .counter-row{
    margin-top:52px;display:flex;flex-wrap:wrap;gap:48px;align-items:flex-end;
    border-top:1px solid var(--line-dark);padding-top:32px;
  }
  .counter{font-family:'Space Grotesk';font-size:3.2rem;color:var(--accent);font-weight:700;}
  .counter-label{color:#9FB0C4;font-size:0.9rem;max-width:220px;}

  /* ---------- OUTROS SERVIÇOS ---------- */
  .servicos{background:var(--paper-2);}
  .grid4{display:grid;grid-template-columns:1fr;gap:1px;background:var(--line);margin-top:40px;border:1px solid var(--line);}
  @media(min-width:640px){.grid4{grid-template-columns:1fr 1fr;}}
  @media(min-width:980px){.grid4{grid-template-columns:repeat(4,1fr);}}
  .svcard{
    background:var(--paper);padding:30px 26px;display:flex;flex-direction:column;gap:14px;
  }
  .svcard .num{font-family:'IBM Plex Mono';color:var(--steel);font-size:0.8rem;}
  .svcard h3{font-size:1.08rem;}
  .svcard p{color:var(--steel);font-size:0.92rem;flex:1;}
  .svcard a{font-size:0.86rem;font-weight:600;color:var(--ink);display:inline-flex;align-items:center;gap:6px;}
  .svcard a:hover{color:var(--alert);}

  /* ---------- PROCESSO ---------- */
  .processo{background:var(--paper);}
  .steps{display:grid;grid-template-columns:1fr;gap:0;margin-top:44px;}
  @media(min-width:760px){.steps{grid-template-columns:repeat(3,1fr);}}
  .step{padding:24px 26px 24px 0;border-top:1px solid var(--line);position:relative;}
  @media(min-width:760px){.step{border-top:none;border-left:1px solid var(--line);padding:6px 26px;}
    .step:first-child{border-left:none;padding-left:0;}}
  .step .n{font-family:'IBM Plex Mono';color:var(--accent);font-size:0.82rem;}
  .step h3{margin-top:10px;font-size:1.05rem;}
  .step p{color:var(--steel);font-size:0.92rem;margin-top:8px;}

  /* ---------- FORM ---------- */
  .cta-final{background:var(--bg-dark);}
  .cta-grid{display:grid;grid-template-columns:1fr;gap:48px;margin-top:20px;}
  @media(min-width:900px){.cta-grid{grid-template-columns:1fr 1fr;}}
  form{display:flex;flex-direction:column;gap:14px;}
  label{font-size:0.82rem;color:#9FB0C4;font-family:'IBM Plex Mono';}
  input,textarea{
    background:var(--bg-dark-2);border:1px solid var(--line-dark);color:var(--white);
    padding:13px 14px;border-radius:var(--radius);font-family:'IBM Plex Sans';font-size:0.96rem;
  }
  input::placeholder,textarea::placeholder{color:#5E7089;}
  .whatsapp-inline{
    margin-top:6px;border:1px dashed var(--line-dark);padding:20px;color:#9FB0C4;font-size:0.88rem;
  }
  .whatsapp-inline a{color:var(--accent);font-weight:600;}
  .formnote{font-size:0.78rem;color:#7488A0;margin-top:2px;}

  /* ---------- FOOTER ---------- */
  footer{background:var(--bg-dark);border-top:1px solid var(--line-dark);padding:40px 0;}
  .footgrid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;color:#9FB0C4;font-size:0.86rem;}
  .footgrid a:hover{color:var(--accent);}
  .footbrand{color:var(--white);font-family:'Space Grotesk';font-weight:700;}

  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto;}
    *{transition:none !important;}
  }
</style>
</head>
<body>

<header>
  <div class="nav">
    <div class="brand">
      <svg class="mark" viewBox="0 0 24 24" fill="none"><path d="M3 20L12 4L21 20" stroke="#E8A33D" stroke-width="2" stroke-linejoin="round"/><path d="M7.5 20L12 11.5L16.5 20" stroke="#F7F9F8" stroke-width="2" stroke-linejoin="round"/></svg>
      MDA Engenharia
    </div>
    <nav class="navlinks">
      <a href="#riscos">Riscos Ocultos</a>
      <a href="#solucao">Vistoria Gratuita</a>
      <a href="#servicos">Outros Serviços</a>
      <a href="#contato">Contato</a>
    <nav class="navlinks" aria-label="Públicos atendidos">
      <a href="sindicos.html">Para síndicos</a>
      <a href="administradoras.html">Para administradoras</a>
      <a href="comercios.html">Para comércios</a>
</nav>

    </nav>
    <a href="#contato" class="btn btn-accent btn-sm navcta">Agendar Vistoria</a>
  </div>
</header>

<section class="hero blueprint">
  <div class="wrap">
    <div class="eyebrow mono">DIAGNÓSTICO TÉCNICO · CREA 20.853/D-GO | CREA 25.576/D-GO | CREA 1019077042/D-GO</div>
    <h1 class="hero-title">Alvará aprovado não é sinônimo de prédio seguro.</h1>
    <p class="hero-sub">O tempo, o uso diário e as normas que mudaram desde a aprovação do projeto abrem falhas que não existiam no papel. Descubra agora os riscos ocultos do seu imóvel — com uma vistoria técnica sem custo.</p>
    <div class="hero-ctas">
      <a href="#contato" class="btn btn-accent">Agendar Vistoria Gratuita</a>
      <a href="#riscos" class="btn btn-ghost">Ver Riscos Comuns ↓</a>
    </div>

    <div class="trust-strip">
      <div class="trust-item"><span class="trust-dot">●</span><span><b>13 anos</b>de atuação em fiscalização, contratos e engenharia de infraestrutura</span></div>
      <div class="trust-item"><span class="trust-dot">●</span><span><b>CREA 20.853/D-GO | CREA 25.576/D-GO | CREA 1019077042/D-GO</b>com visto ativo em CREA-DF</span></div>
      <div class="trust-item"><span class="trust-dot">●</span><span><b>Anápolis e Região</b>atendimento presencial e relatório técnico assinado</span></div>
    </div>
  </div>
</section>

<section class="riscos" id="riscos">
  <div class="wrap">
    <div class="sec-label mono">01 — Pontos de Atenção</div>
    <h2 class="sec-title">A verdadeira segurança é contínua, não um evento único.</h2>
    <p class="sec-desc">Interaja com as categorias abaixo para entender os pontos críticos que mais aparecem em vistorias reais.</p>

    <div class="tabbar" role="tablist">
      <button class="tabbtn active" data-tab="eletrica">Elétrica &amp; Gás</button>
      <button class="tabbtn" data-tab="incendio">Combate a Incêndio</button>
      <button class="tabbtn" data-tab="estrutura">Estrutura &amp; Infiltrações</button>
      <button class="tabbtn" data-tab="sinalizacao">Sinalização &amp; Fuga</button>
    </div>

    <div class="tabpanel active" data-panel="eletrica">
      <figure class="risco-media">
        <img class="risco-img" src="imagens/eletrica.jpg" alt="Quadro de instalações elétricas em vistoria">
        <figcaption class="mono">FIG. 01 — INSTALAÇÕES ELÉTRICAS &amp; GÁS</figcaption>
      </figure>
      <ul class="risco-list">
        <li>Quadros de energia desatualizados ou sem identificação correta.</li>
        <li>Fiação exposta, ressecada ou com gambiarras.</li>
        <li>Falta de aterramento adequado (SPDA / para-raios) ou de manutenção periódica.</li>
        <li>Vazamentos ou má conservação nas tubulações de gás.</li>
      </ul>
    </div>

    <div class="tabpanel" data-panel="incendio">
      <figure class="risco-media">
        <img class="risco-img" src="imagens/incendio.jpg" alt="Extintor e equipamento de combate a incêndio">
        <figcaption class="mono">FIG. 02 — COMBATE A INCÊNDIO</figcaption>
      </figure>
      <ul class="risco-list">
        <li>Extintores vencidos, obstruídos ou fora do local correto.</li>
        <li>Hidrantes e mangueiras sem teste de pressão, ou com vazamentos.</li>
        <li>Alarmes e detectores de fumaça inoperantes ou sem testes periódicos.</li>
        <li>Portas corta-fogo sem vedação adequada ou travadas abertas.</li>
      </ul>
    </div>

    <div class="tabpanel" data-panel="estrutura">
      <figure class="risco-media">
        <img class="risco-img" src="imagens/estrutura.jpg" alt="Fissura em parede ou infiltração estrutural">
        <figcaption class="mono">FIG. 03 — ESTRUTURA &amp; INFILTRAÇÕES</figcaption>
      </figure>
      <ul class="risco-list">
        <li>Sinais de infiltração, mofo ou umidade em paredes e tetos.</li>
        <li>Fissuras, trincas ou rachaduras em vigas, pilares e lajes.</li>
        <li>Corrosão em armaduras expostas ou estruturas metálicas.</li>
        <li>Desgaste ou danos em revestimentos, pisos e fachadas.</li>
      </ul>
    </div>

    <div class="tabpanel" data-panel="sinalizacao">
      <figure class="risco-media">
        <img class="risco-img" src="imagens/sinalizacao.jpg" alt="Sinalização de saída de emergência e rota de fuga">
        <figcaption class="mono">FIG. 04 — SINALIZAÇÃO &amp; ROTAS DE FUGA</figcaption>
      </figure>
      <ul class="risco-list">
        <li>Rotas de fuga obstruídas por móveis, estoque ou lixo.</li>
        <li>Sinalização de emergência apagada, danificada ou inexistente.</li>
        <li>Iluminação de emergência que não funciona ou tem baixa autonomia.</li>
        <li>Guarda-corpos e corrimãos frouxos, com altura inadequada ou corroídos.</li>
      </ul>
    </div>
  </div>
</section>

<section class="solucao" id="solucao">
  <div class="wrap">
    <div class="sec-label mono">02 — Nossa Solução</div>
    <h2 class="sec-title">Um diagnóstico completo, sem custo e sem compromisso.</h2>
    <p class="sec-desc" style="color:#9FB0C4;">Nossa equipe avalia todos os aspectos vitais da segurança do imóvel e entrega um relatório técnico com plano de ação — você decide o que e quando priorizar.</p>

    <div class="chips">
      <span class="chip">Acessibilidade</span>
      <span class="chip">Estrutura</span>
      <span class="chip">Sistema de Incêndio</span>
      <span class="chip">Instalações Elétricas</span>
      <span class="chip">Rotas de Fuga</span>
      <span class="chip">Sistema de Gás</span>
    </div>

    <div class="counter-row">
      <div>
        <div class="counter" data-target="20">0</div>
        <div class="counter-label">pontos críticos de segurança avaliados por vistoria</div>
      </div>
      <div>
        <div class="counter" data-target="24">0</div>
        <div class="counter-label">horas para retorno após a solicitação</div>
      </div>
    </div>
  </div>
</section>

<section class="servicos" id="servicos">
  <div class="wrap">
    <div class="sec-label mono">03 — Além da Vistoria</div>
    <h2 class="sec-title">Enquanto isso, também resolvemos o que já apareceu.</h2>
    <p class="sec-desc">A vistoria gratuita frequentemente revela pequenos reparos e ajustes. Cuidamos deles diretamente, sem precisar contratar outro fornecedor.</p>

    <div class="grid4">
      <div class="svcard">
        <span class="num mono">01</span>
        <h3>Instalações Elétricas</h3>
        <p>Serviços elétricos, CFTV, alarmes e manutenção técnica especializada.</p>
        <a href="https://wa.me/5561993862269?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20de%20instala%C3%A7%C3%B5es%20el%C3%A9tricas.">Solicitar orçamento →</a>
      </div>
      <div class="svcard">
        <span class="num mono">02</span>
        <h3>Instalações Hidráulicas</h3>
        <p>Reparos, instalações e manutenção com precisão técnica e sem desperdício.</p>
        <a href="https://wa.me/5561993862269?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20de%20instala%C3%A7%C3%B5es%20hidr%C3%A1ulicas.">Solicitar orçamento →</a>
      </div>
      <div class="svcard">
        <span class="num mono">03</span>
        <h3>Projetos &amp; PPCI</h3>
        <p>Projetos de engenharia, prevenção contra incêndio (PPCI) e segurança do trabalho.</p>
        <a href="https://wa.me/5561993862269?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20projetos%20de%20PPCI.">Solicitar orçamento →</a>
      </div>
      <div class="svcard">
        <span class="num mono">04</span>
        <h3>Acompanhamento de Obras</h3>
        <p>Consultoria predial, vistorias técnicas e acompanhamento rigoroso de cronograma.</p>
        <a href="https://wa.me/5561993862269?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20acompanhamento%20de%20obras.">Solicitar orçamento →</a>
      </div>
    </div>
  </div>
</section>

<section class="processo">
  <div class="wrap">
    <div class="sec-label mono">04 — Como Funciona</div>
    <h2 class="sec-title">Três etapas, do primeiro contato ao plano de ação.</h2>
    <div class="steps">
      <div class="step">
        <div class="n mono">passo 1</div>
        <h3>Agendamento</h3>
        <p>Você envia o formulário ou chama no WhatsApp. Confirmamos data e horário em até 24h.</p>
      </div>
      <div class="step">
        <div class="n mono">passo 2</div>
        <h3>Vistoria no local</h3>
        <p>Avaliação técnica presencial, cobrindo elétrica, estrutura, incêndio, gás e rotas de fuga.</p>
      </div>
      <div class="step">
        <div class="n mono">passo 3</div>
        <h3>Relatório e plano de ação</h3>
        <p>Você recebe os riscos priorizados e, se quiser, já contrata os reparos com a gente.</p>
      </div>
    </div>
  </div>
</section>

<section class="cta-final" id="contato">
  <div class="wrap">
    <div class="sec-label mono" style="color:var(--accent);">05 — Comece Hoje</div>
    <h2 class="sec-title" style="color:var(--white);">Proteja seu patrimônio antes que o risco vire prejuízo.</h2>

    <div class="cta-grid">
        <form action="https://formspree.io/f/moeqjzrk" method="POST">
        <input type="hidden" name="_subject" value="Novo pedido de vistoria — site MDA Engenharia">
        <div>
       html
<form id="lead-qualification-form" class="lead-form" novalidate>
  <input type="hidden" name="source_page" id="source_page">
  <input type="hidden" name="utm_source" id="utm_source">
  <input type="hidden" name="utm_medium" id="utm_medium">
  <input type="hidden" name="utm_campaign" id="utm_campaign">

  <div class="form-progress" aria-live="polite"><span id="form-progress-label">Etapa 1 de 3</span><i><b id="form-progress-bar"></b></i></div>

  <fieldset data-form-step="1">
    <legend>Vamos entender o imóvel.</legend>
    <p class="form-step-intro">As respostas ajudam a direcionar a conversa e indicar o próximo passo. Você não precisa ter conhecimento técnico.</p>
    <div class="form-grid">
      <label>Seu nome<input name="name" type="text" autocomplete="name" placeholder="Como podemos chamar você?" required></label>
      <label>Telefone / WhatsApp<input name="phone" type="tel" autocomplete="tel" placeholder="(62) 90000-0000" required></label>
      <label>Você fala em nome de
        <select name="profile" id="lead-profile" required>
          <option value="">Selecione uma opção</option>
          <option value="sindico">Condomínio / síndico</option>
          <option value="administradora">Administradora de condomínios</option>
          <option value="comercio">Comércio ou empresa</option>
          <option value="outro">Outro tipo de imóvel</option>
        </select>
      </label>
      <label>Cidade do imóvel<input name="city" type="text" autocomplete="address-level2" placeholder="Ex.: Anápolis" required></label>
    </div>
    <button type="button" class="btn btn-accent form-next">Continuar →</button>
  </fieldset>

  <fieldset data-form-step="2" hidden>
    <legend>Qual é a necessidade principal?</legend>
    <p class="form-step-intro">Selecione o que melhor descreve a situação neste momento.</p>
    <div class="choice-grid">
      <label class="choice"><input type="radio" name="need" value="vistoria-inicial" required><span><b>Vistoria inicial</b><small>Quero identificar riscos e prioridades.</small></span></label>
      <label class="choice"><input type="radio" name="need" value="laudo-relatorio"><span><b>Laudo ou relatório técnico</b><small>Preciso documentar uma condição do imóvel.</small></span></label>
      <label class="choice"><input type="radio" name="need" value="incendio-ppci"><span><b>Incêndio / PPCI</b><small>Quero revisar prevenção e combate a incêndio.</small></span></label>
      <label class="choice"><input type="radio" name="need" value="eletrica-gas"><span><b>Elétrica ou gás</b><small>Tenho uma suspeita ou necessidade de revisão.</small></span></label>
      <label class="choice"><input type="radio" name="need" value="estrutura-infiltracao"><span><b>Estrutura / infiltração</b><small>Há sinais que precisam ser investigados.</small></span></label>
      <label class="choice"><input type="radio" name="need" value="manutencao"><span><b>Manutenção ou acompanhamento</b><small>Quero organizar correções e continuidade.</small></span></label>
    </div>
    <label class="wide-label">Conte um pouco mais, se quiser<textarea name="context" rows="4" placeholder="Descreva o que aconteceu, há quanto tempo e se existe alguma urgência percebida."></textarea></label>
    <div class="form-navigation"><button type="button" class="btn btn-outline-dark form-back">← Voltar</button><button type="button" class="btn btn-accent form-next">Continuar →</button></div>
  </fieldset>

  <fieldset data-form-step="3" hidden>
    <legend>Qual é o melhor próximo passo?</legend>
    <p class="form-step-intro">Vamos registrar sua preferência para a equipe responder de forma objetiva.</p>
    <div class="form-grid">
      <label>Prazo desejado
        <select name="timing" required><option value="">Selecione uma opção</option><option value="entender-agora">Quero entender agora</option><option value="proximas-semanas">Nas próximas semanas</option><option value="proximo-mes">No próximo mês</option><option value="sem-prazo">Ainda estou pesquisando</option></select>
      </label>
      <label>Melhor canal
        <select name="preferred_channel" required><option value="">Selecione uma opção</option><option value="whatsapp">WhatsApp</option><option value="telefone">Ligação</option><option value="email">E-mail</option></select>
      </label>
      <label class="wide-label">E-mail (opcional)<input name="email" type="email" autocomplete="email" placeholder="voce@email.com"></label>
    </div>
    <label class="consent"><input name="consent" type="checkbox" required><span>Autorizo o contato para tratar esta solicitação. Consulte o aviso de privacidade da empresa antes de publicar este formulário.</span></label>
    <div class="form-navigation"><button type="button" class="btn btn-outline-dark form-back">← Voltar</button><button type="submit" class="btn btn-accent">Enviar e falar com a equipe →</button></div>
  </fieldset>
  <p id="lead-form-status" class="form-status" role="status" aria-live="polite"></p>
</form>


<footer>
  <div class="wrap footgrid">
    <div>
      <div class="footbrand">MDA Engenharia</div>
      <div style="margin-top:6px;">CREA 20.853/D-GO | CREA 25.576/D-GO | CREA 1019077042/D-GO</div>
      <div>Anápolis/GO | Brasília/DF | Goiânia/GO e Região</div>
    </div>
    <div>
      <div>(61) 99386-2269</div>
      <div>mdaengenharia.contato@gmail.com</div>
    </div>
    <div>
      <a href="#riscos">Riscos Ocultos</a><br>
      <a href="#servicos" style="display:inline-block;margin-top:6px;">Outros Serviços</a>
    </div>
  </div>
  <div class="wrap" style="margin-top:24px;padding-top:20px;border-top:1px solid var(--line-dark);font-size:0.78rem;color:#5E7089;">
    © 2026 MDA Engenharia — Segurança Contínua.
  </div>
</footer>

<script>
  // Tabs
  document.querySelectorAll('.tabbtn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tabbtn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.querySelector('[data-panel="'+btn.dataset.tab+'"]').classList.add('active');
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target,10);
        let cur = 0;
        const step = Math.max(1, Math.round(target/30));
        const tick = ()=>{
          cur += step;
          if(cur >= target){ el.textContent = target; return; }
          el.textContent = cur;
          requestAnimationFrame(tick);
        };
        tick();
        obs.unobserve(el);
      }
    });
  },{threshold:0.5});
  counters.forEach(c=>obs.observe(c));
</script>

html
<script>
  (() => {
    const form = document.querySelector('#lead-qualification-form');
    if (!form) return;

    const FORM_ENDPOINT = ''; // Ex.: endpoint do CRM/provedor de formulários, usando HTTPS.
    const steps = [...form.querySelectorAll('[data-form-step]')];
    const status = form.querySelector('#lead-form-status');
    const progressLabel = form.querySelector('#form-progress-label');
    const progressBar = form.querySelector('#form-progress-bar');
    let current = 1;

    const setHidden = (element, hidden) => {
      element.hidden = hidden;
      element.setAttribute('aria-hidden', String(hidden));
    };

    function updateStep(next) {
      current = Math.max(1, Math.min(3, next));
      steps.forEach((step) => setHidden(step, Number(step.dataset.formStep) !== current));
      progressLabel.textContent = `Etapa ${current} de 3`;
      progressBar.style.width = `${current * 33.333}%`;
      const firstField = steps[current - 1].querySelector('input, select, textarea');
      firstField?.focus();
    }

    function validateStep(stepNumber) {
      const fields = [...steps[stepNumber - 1].querySelectorAll('input, select, textarea')];
      const requiredFields = fields.filter((field) => field.required);
      const hasMissing = requiredFields.some((field) => {
        if (field.type === 'radio') return !steps[stepNumber - 1].querySelector(`input[name="${field.name}"]:checked`);
        return !field.value.trim();
      });
      if (hasMissing) {
        status.textContent = 'Preencha os campos obrigatórios para continuar.';
        status.className = 'form-status error';
        return false;
      }
      status.textContent = '';
      status.className = 'form-status';
      return true;
    }

    form.querySelectorAll('.form-next').forEach((button) => button.addEventListener('click', () => {
      if (validateStep(current)) updateStep(current + 1);
    }));
    form.querySelectorAll('.form-back').forEach((button) => button.addEventListener('click', () => updateStep(current - 1)));

    const params = new URLSearchParams(window.location.search);
    const profile = params.get('perfil');
    if (profile && form.querySelector(`#lead-profile option[value="${profile}"]`)) form.querySelector('#lead-profile').value = profile;
    form.querySelector('#source_page').value = window.location.pathname;
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach((name) => { form.querySelector(`#${name}`).value = params.get(name) || ''; });

    function collectData() {
      return Object.fromEntries(new FormData(form).entries());
    }

    function buildWhatsAppMessage(data) {
      return [
        'Olá, quero falar sobre uma avaliação técnica.',
        `Nome: ${data.name}`,
        `Perfil: ${data.profile}`,
        `Cidade: ${data.city}`,
        `Necessidade: ${data.need}`,
        `Prazo: ${data.timing}`,
        `Canal preferido: ${data.preferred_channel}`,
        data.context ? `Contexto: ${data.context}` : '',
        data.email ? `E-mail: ${data.email}` : '',
        `Origem: ${data.source_page}`
      ].filter(Boolean).join('\\n');
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!validateStep(3)) return;
      const data = collectData();
      const submitButton = form.querySelector('[type="submit"]');
      submitButton.disabled = true;
      status.textContent = 'Enviando sua solicitação...';
      status.className = 'form-status';

      try {
        if (FORM_ENDPOINT) {
          const response = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) });
          if (!response.ok) throw new Error('endpoint');
        }
        const message = encodeURIComponent(buildWhatsAppMessage(data));
        window.open(`https://wa.me/5561993862269?text=${message}`, '_blank', 'noopener');
        status.textContent = 'Solicitação preparada. Se o WhatsApp não abriu, use o botão ou ligue diretamente para a equipe.';
        status.className = 'form-status success';
        form.reset();
        updateStep(1);
      } catch (error) {
        status.textContent = 'Não foi possível enviar agora. Tente novamente ou fale diretamente pelo WhatsApp.';
        status.className = 'form-status error';
      } finally {
        submitButton.disabled = false;
      }
    });
  })();
</script>

</body>
</html>
