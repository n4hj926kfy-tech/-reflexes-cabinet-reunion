// Affichage enrichi des fiches disposant d'un mini-cours professionnel
(()=>{
  const baseOpenFiche=window.openFiche;
  if(typeof baseOpenFiche!=='function') return;

  const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  const renderTable=(rows,caption)=>{
    if(!rows?.length) return '';
    const [head,...body]=rows;
    return `<div class="compare-wrap" tabindex="0" aria-label="Tableau comparatif défilable horizontalement"><table class="compare-table"><caption>${esc(caption)}</caption><thead><tr>${head.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  };

  const renderCourse=(f)=>{
    if(!f.courseSections?.length) return '';
    return `<section id="cours-pro" class="course-intro" aria-labelledby="cours-pro-title">
      <span class="badge">📚 COURS PROFESSIONNEL</span>
      <h3 id="cours-pro-title">Construire et justifier le conseil</h3>
      <p>Cette partie va au-delà du mémo : elle expose les variables à analyser, les conséquences pratiques et les raisonnements à documenter dans le dossier.</p>
      <nav class="course-index" aria-label="Sommaire du cours">
        <a href="#cours-comparatif">Comparatif</a><a href="#cours-raisonnement">Raisonnement</a><a href="#cours-orientation">Orientations</a><a href="#cours-cas">Cas clients</a>
      </nav>
      <div class="pro-note"><strong>Réflexe cabinet :</strong> on ne recommande pas une forme juridique avec une règle unique. On formule une hypothèse, on chiffre le coût global, on vérifie la gouvernance et on documente les contreparties.</div>
    </section>
    <section id="cours-comparatif" aria-labelledby="comparatif-title">
      <h3 id="comparatif-title" class="section-course-title">Comparatif décisionnel</h3>
      ${renderTable(f.comparison,'SARL vs SAS — paramètres qui peuvent faire basculer le choix')}
    </section>
    <section id="cours-raisonnement" aria-labelledby="raisonnement-title">
      <h3 id="raisonnement-title" class="section-course-title">Mini-cours</h3>
      ${f.courseSections.map((s,i)=>`<details class="course-block" ${i===0?'open':''}><summary>${esc(s.title)}</summary><div class="course-body">${(s.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}${s.bullets?.length?`<ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}</div></details>`).join('')}
    </section>
    <section id="cours-orientation" aria-labelledby="orientation-title">
      <h3 id="orientation-title" class="section-course-title">Matrice d’orientation</h3>
      <div class="decision-grid">${(f.decisionRules||[]).slice(1).map(r=>`<article class="decision-card"><h4>${esc(r[0])}</h4><div class="orientation">${esc(r[1])}</div><p>${esc(r[2])}</p></article>`).join('')}</div>
    </section>
    <section id="cours-cas" aria-labelledby="cas-title">
      <h3 id="cas-title" class="section-course-title">Cas clients commentés</h3>
      <div class="scenario-grid">${(f.scenarios||[]).map(s=>`<article class="scenario-card"><h4>${esc(s.title)}</h4><div class="context">${esc(s.context)}</div><ol>${(s.reasoning||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol></article>`).join('')}</div>
    </section>`;
  };

  window.openFiche=function(id){
    baseOpenFiche(id);
    const f=window.KB?.fiches?.find(x=>x.id===id);
    if(!f?.courseSections?.length) return;
    const hero=document.querySelector('.fiche-hero');
    if(!hero) return;
    hero.insertAdjacentHTML('afterend',renderCourse(f));
  };
})();
