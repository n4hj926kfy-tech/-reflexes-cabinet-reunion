(()=>{
  if(typeof openFiche!=='function') return;
  const baseOpenFiche=openFiche;

  function renderTable(rows,extraClass=''){
    if(!rows||rows.length<2) return '';
    const [head,...body]=rows;
    return `<div class="table-scroll" tabindex="0" aria-label="Tableau comparatif"><table class="pro-table ${extraClass}"><thead><tr>${head.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${r.map((x,i)=>i===0?`<th scope="row">${esc(x)}</th>`:`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function renderProfessionalCourse(f){
    const anchors=[];
    if(f.comparison) anchors.push(['comparatif','Comparatif']);
    if(f.courseSections?.length) anchors.push(['cours','Cours']);
    if(f.decisionRules) anchors.push(['decision','Décision']);
    if(f.scenarios?.length) anchors.push(['cas','Cas pratiques']);

    return `
      <section class="pro-course" aria-labelledby="proCourseTitle">
        <div class="pro-course-head"><div><h3 id="proCourseTitle">Cours professionnel</h3><p>Pour comprendre, argumenter et documenter le conseil au client.</p></div><span class="badge">NIVEAU CABINET</span></div>
        ${anchors.length?`<nav class="pro-anchorbar" aria-label="Sommaire du cours">${anchors.map(a=>`<a href="#${a[0]}">${a[1]}</a>`).join('')}</nav>`:''}
        <div class="course-note"><strong>Méthode :</strong> la conclusion ne doit jamais découler d’un seul critère. Il faut croiser situation sociale du dirigeant, fiscalité, gouvernance, stratégie de capital et projet personnel.</div>
        ${f.comparison?`<section class="card pro-section" id="comparatif"><h3>Matrice comparative</h3>${renderTable(f.comparison)}</section>`:''}
        ${f.courseSections?.length?`<div id="cours">${f.courseSections.map((s,i)=>`<section class="card pro-section"><h3>${esc(s.title)}</h3>${(s.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}${s.bullets?.length?`<ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}</section>`).join('')}</div>`:''}
        ${f.decisionRules?`<section class="card pro-section" id="decision"><h3>Matrice de décision</h3><p>Ce tableau donne une <strong>orientation à tester</strong>, jamais une conclusion automatique.</p>${renderTable(f.decisionRules,'decision-table')}</section>`:''}
        ${f.scenarios?.length?`<section class="card pro-section" id="cas"><h3>Cas pratiques de raisonnement</h3><div class="scenario-grid">${f.scenarios.map(s=>`<article class="scenario-card"><h4>${esc(s.title)}</h4><p class="scenario-context">${esc(s.context)}</p><ol>${s.reasoning.map(r=>`<li>${esc(r)}</li>`).join('')}</ol></article>`).join('')}</div></section>`:''}
      </section>`;
  }

  openFiche=function(id){
    const f=KB.fiches.find(x=>x.id===id);
    if(!f || !(f.courseSections||f.comparison||f.decisionRules||f.scenarios)) return baseOpenFiche(id);

    state.route='fiche';
    bindNav();
    app.innerHTML=`<button type="button" class="back" id="backFiches">← Retour aux fiches</button>
      <section class="card fiche-hero"><div><span class="badge">${moduleName(f.module)}</span> <span class="badge ${f.status.includes('2026')?'warn':''}">${esc(f.status)}</span></div><h2>${esc(f.title)}</h2><div class="meta"><span>${esc(f.article)}</span><span>•</span><span>Vérifié ${KB.verifiedAt.split('-').reverse().join('/')}</span><span>•</span><span>${priority(f.priority)}</span></div><div class="reflex">⚡ ${esc(f.reflex)}</div></section>
      <section class="card content-card"><h3>Questions de diagnostic à poser au client</h3><ul>${f.ask.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
      <section class="card content-card"><h3>Synthèse technique</h3><ul>${f.detail.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
      <section class="card content-card trap"><h3>⚠️ Piège classique</h3><p>${esc(f.trap)}</p></section>
      <section class="card content-card example"><h3>💼 Exemple cabinet</h3><p>${esc(f.example)}</p></section>
      ${renderProfessionalCourse(f)}
      <section class="card content-card"><h3>Sources officielles</h3>${f.sources.map(s=>`<a class="source" href="${s[1]}" target="_blank" rel="noopener">↗ ${esc(s[0])}</a>`).join('')}<p class="fineprint">Outil pédagogique et d’aide au raisonnement : avant toute préconisation ou déclaration, valider les hypothèses chiffrées et le texte applicable à la situation du client.</p></section>`;

    $('#backFiches').onclick=()=>{state.route='fiches';render()};
    requestAnimationFrame(()=>app.focus({preventScroll:true}));
  };
})();
