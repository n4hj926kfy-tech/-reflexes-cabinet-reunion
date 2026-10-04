(()=>{
  if(typeof openFiche!=='function') return;
  const baseOpenFiche=openFiche;

  function renderTable(rows,extraClass=''){
    if(!rows||rows.length<2) return '';
    const [head,...body]=rows;
    return `<div class="table-scroll reference-item" tabindex="0" aria-label="Tableau de référence"><table class="pro-table ${extraClass}"><thead><tr>${head.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${r.map((x,i)=>i===0?`<th scope="row">${esc(x)}</th>`:`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function renderReferenceTables(f){
    if(!f.referenceTables?.length) return '';
    return `<section class="card pro-section" id="referentiel"><h3>Référentiel opérationnel</h3><p>Tables de consultation rapide pour traiter un dossier sans rester au niveau du principe général.</p>
      <div class="guide-search"><label for="guideFilter">Rechercher dans ce guide</label><input id="guideFilter" type="search" placeholder="Ex. Saint-André, restauration, 62.01, tourisme…" autocomplete="off"></div>
      <div id="referenceTables">${f.referenceTables.map((t,i)=>`<details class="reference-block reference-item" ${i===0?'open':''}><summary>${esc(t.title)}</summary><div class="reference-body">${t.intro?`<p>${esc(t.intro)}</p>`:''}${renderTable(t.rows||[])}</div></details>`).join('')}</div>
      <p id="guideNoResult" class="fineprint hidden" role="status">Aucun élément de ce référentiel ne correspond à la recherche.</p></section>`;
  }

  function renderChecklist(f){
    if(!f.quickChecklist?.length) return '';
    return `<section class="card pro-section checklist-section" id="checklist"><h3>Checklist dossier</h3><ol class="work-checklist">${f.quickChecklist.map(x=>`<li class="reference-item">${esc(x)}</li>`).join('')}</ol></section>`;
  }

  function renderDocuments(f){
    if(!f.documents?.length) return '';
    return `<section class="card pro-section" id="pieces"><h3>Pièces et preuves à conserver</h3><ul class="document-list">${f.documents.map(x=>`<li class="reference-item"><strong>${esc(x[0])}</strong>${x[1]?` — ${esc(x[1])}`:''}</li>`).join('')}</ul></section>`;
  }

  function renderProfessionalCourse(f){
    const anchors=[];
    if(f.quickChecklist?.length) anchors.push(['checklist','Checklist']);
    if(f.comparison) anchors.push(['comparatif','Comparatif']);
    if(f.referenceTables?.length) anchors.push(['referentiel','Référentiel']);
    if(f.courseSections?.length) anchors.push(['cours','Cours']);
    if(f.decisionRules) anchors.push(['decision','Décision']);
    if(f.scenarios?.length) anchors.push(['cas','Cas pratiques']);
    if(f.documents?.length) anchors.push(['pieces','Pièces']);

    const defaultMethod='Vérifier successivement le champ d’application, la période, le fait générateur, la base, le taux ou plafond, les exclusions, les cumuls et les justificatifs. Documenter la conclusion dans le dossier.';
    return `
      <section class="pro-course" aria-labelledby="proCourseTitle">
        <div class="pro-course-head"><div><h3 id="proCourseTitle">Guide de travail professionnel</h3><p>Pour traiter, argumenter et documenter le dossier client.</p></div><span class="badge">NIVEAU CABINET</span></div>
        ${anchors.length?`<nav class="pro-anchorbar" aria-label="Sommaire du guide">${anchors.map(a=>`<a href="#${a[0]}">${a[1]}</a>`).join('')}</nav>`:''}
        <div class="course-note"><strong>Méthode :</strong> ${esc(f.methodNote||defaultMethod)}</div>
        ${renderChecklist(f)}
        ${f.comparison?`<section class="card pro-section" id="comparatif"><h3>Matrice comparative</h3>${renderTable(f.comparison)}</section>`:''}
        ${renderReferenceTables(f)}
        ${f.courseSections?.length?`<div id="cours">${f.courseSections.map((s,i)=>`<section class="card pro-section reference-item"><h3>${esc(s.title)}</h3>${(s.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}${s.bullets?.length?`<ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}</section>`).join('')}</div>`:''}
        ${f.decisionRules?`<section class="card pro-section" id="decision"><h3>Matrice de décision</h3><p>Ce tableau donne une <strong>orientation à tester</strong>, jamais une conclusion automatique.</p>${renderTable(f.decisionRules,'decision-table')}</section>`:''}
        ${f.scenarios?.length?`<section class="card pro-section" id="cas"><h3>Cas pratiques de raisonnement</h3><div class="scenario-grid">${f.scenarios.map(s=>`<article class="scenario-card reference-item"><h4>${esc(s.title)}</h4><p class="scenario-context">${esc(s.context)}</p><ol>${s.reasoning.map(r=>`<li>${esc(r)}</li>`).join('')}</ol></article>`).join('')}</div></section>`:''}
        ${renderDocuments(f)}
      </section>`;
  }

  function bindGuideFilter(){
    const input=document.querySelector('#guideFilter');
    if(!input) return;
    input.addEventListener('input',()=>{
      const q=input.value.trim().toLocaleLowerCase('fr');
      let visible=0;
      document.querySelectorAll('#referenceTables .reference-block').forEach(block=>{
        const ok=!q||block.textContent.toLocaleLowerCase('fr').includes(q);
        block.classList.toggle('hidden',!ok);
        if(ok){visible++; if(q) block.open=true;}
      });
      const none=document.querySelector('#guideNoResult');
      if(none) none.classList.toggle('hidden',visible!==0||!q);
    });
  }

  openFiche=function(id){
    const f=KB.fiches.find(x=>x.id===id);
    if(!f || !(f.courseSections||f.comparison||f.decisionRules||f.scenarios||f.referenceTables||f.quickChecklist)) return baseOpenFiche(id);

    state.route='fiche';
    bindNav();
    app.innerHTML=`<button type="button" class="back" id="backFiches">← Retour aux fiches</button>
      <section class="card fiche-hero"><div><span class="badge">${moduleName(f.module)}</span> <span class="badge ${String(f.status).includes('2026')?'warn':''}">${esc(f.status)}</span></div><h2>${esc(f.title)}</h2><div class="meta"><span>${esc(f.article)}</span><span>•</span><span>Vérifié ${KB.verifiedAt.split('-').reverse().join('/')}</span><span>•</span><span>${priority(f.priority)}</span></div><div class="reflex">⚡ ${esc(f.reflex)}</div></section>
      <section class="card content-card"><h3>Questions de diagnostic à poser au client</h3><ul>${f.ask.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
      <section class="card content-card"><h3>Synthèse technique</h3><ul>${f.detail.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
      <section class="card content-card trap"><h3>⚠️ Piège classique</h3><p>${esc(f.trap)}</p></section>
      <section class="card content-card example"><h3>💼 Exemple cabinet</h3><p>${esc(f.example)}</p></section>
      ${renderProfessionalCourse(f)}
      <section class="card content-card"><h3>Sources officielles</h3>${f.sources.map(s=>`<a class="source" href="${s[1]}" target="_blank" rel="noopener">↗ ${esc(s[0])}</a>`).join('')}<p class="fineprint">Guide de travail et d’aide au raisonnement : avant toute préconisation ou déclaration, valider les faits, les hypothèses chiffrées et la version du texte applicable au dossier.</p></section>`;

    $('#backFiches').onclick=()=>{state.route='fiches';render()};
    bindGuideFilter();
    requestAnimationFrame(()=>app.focus({preventScroll:true}));
  };
})();
