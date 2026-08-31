<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MDA Engenharia | Diagnóstico de Segurança Predial e Manutenção</title>
<meta name="description" content="Vistoria técnica gratuita de segurança predial em Anápolis e região. Elétrica, hidráulica, PPCI e acompanhamento de obras. CREA 20.853/D-GO.">
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
  .wrap{max-width:1120px;margin:0 auto;padding:0 28px;}
  img,svg{display:block;max-width:100%;}
  a:focus-visible, button:focus-visible, input:focus-visible{
    outline:2px solid var(--accent); outline-offset:2px;
  }
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
  .crop{position:relative;}
  .crop::before,.crop::after{
    content:"";position:absolute;width:14px;height:14px;
    border-color:var(--accent);border-style:solid;opacity:0.7;
  }
  .crop::before{top:0;left:0;border-width:2px 0 0 2px;}
  .crop::after{bottom:0;right:0;border-width:0 2px 2px 0;}
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
  section{padding:84px 0;}
  .sec-label{
    font-size:0.78rem;color:var(--steel);text-transform:uppercase;
    display:flex;align-items:center;gap:10px;margin-bottom:14px;
  }
  .sec-label::before{content:"";width:26px;height:1px;background:var(--steel);}
  h2.sec-title{font-size:clamp(1.6rem,3.4vw,2.3rem);max-width:640px;}
  .sec-desc{max-width:620px;color:var(--steel);margin-top:14px;font-size:1.02rem;}
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
  .processo{background:var(--paper);}
  .steps{display:grid;grid-template-columns:1fr;gap:0;margin-top:44px;}
  @media(min-width:760px){.steps{grid-template-columns:repeat(3,1fr);}}
  .step{padding:24px 26px 24px 0;border-top:1px solid var(--line);position:relative;}
  @media(min-width:760px){.step{border-top:none;border-left:1px solid var(--line);padding:6px 26px;}
    .step:first-child{border-left:none;padding-left:0;}}
  .step .n{font-family:'IBM Plex Mono';color:var(--accent);font-size:0.82rem;}
  .step h3{margin-top:10px;font-size:1.05rem;}
  .step p{color:var(--steel);font-size:0.92rem;margin-top:8px;}
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
    </nav>
    <a href="#contato" class="btn btn-accent btn-sm navcta">Agendar Vistoria</a>
  </div>
</header>

<section class="hero blueprint">
  <div class="wrap">
    <div class="eyebrow mono">DIAGNÓSTICO TÉCNICO · CREA 20.853/D-GO</div>
    <h1 class="hero-title">Alvará aprovado não é sinônimo de prédio seguro.</h1>
    <p class="hero-sub">O tempo, o uso diário e as normas que mudaram desde a aprovação do projeto abrem falhas que não existiam no papel. Descubra agora os riscos ocultos do seu imóvel — com uma vistoria técnica sem custo.</p>
    <div class="hero-ctas">
      <a href="#contato" class="btn btn-accent">Agendar Vistoria Gratuita</a>
      <a href="#riscos" class="btn btn-ghost">Ver Riscos Comuns ↓</a>
    </div>

    <div class="trust-strip">
      <div class="trust-item"><span class="trust-dot">●</span><span><b>13 anos</b>de atuação em fiscalização, contratos e engenharia de infraestrutura</span></div>
      <div class="trust-item"><span class="trust-dot">●</span><span><b>CREA 20.853/D-GO</b>com visto ativo em CREA-DF</span></div>
      <div class="trust-item"><span class="trust-dot">●</span><span><b>Anápolis e Região</b>atendimento presencial e
