(()=>{
  const app=document.getElementById('app');
  if(!app) return;

  const setThemeMeta=()=>{
    const dark=document.documentElement.dataset.theme==='dark';
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content',dark?'#1d1714':'#fff7f1');
    const btn=document.getElementById('themeBtn');
    if(btn){
      btn.setAttribute('aria-label',dark?'Passer au mode clair':'Passer au mode sombre');
      btn.setAttribute('title',dark?'Passer au mode clair':'Passer au mode sombre');
    }
  };

  const focusToolPane=()=>{
    const pane=document.getElementById('toolPane');
    if(!pane) return;
    pane.setAttribute('role','region');
    pane.setAttribute('aria-live','polite');
    pane.setAttribute('tabindex','-1');
    requestAnimationFrame(()=>{
      pane.focus({preventScroll:true});
      pane.scrollIntoView({behavior:'smooth',block:'start'});
    });
  };

  const bindToolButtons=()=>{
    const bindings=[
      ['openFiscalTool',()=>typeof fiscalTool==='function'&&fiscalTool()],
      ['openDecision',()=>typeof decisionTool==='function'&&decisionTool()],
      ['openInvest',()=>typeof investTool==='function'&&investTool()]
    ];
    bindings.forEach(([id,fn])=>{
      const btn=document.getElementById(id);
      if(!btn) return;
      btn.type='button';
      btn.onclick=e=>{
        e.preventDefault();
        fn();
        focusToolPane();
      };
    });
  };

  const enhanceA11y=()=>{
    app.setAttribute('tabindex','-1');
    app.setAttribute('aria-label','Contenu principal');

    const homeSearch=document.getElementById('homeSearch');
    if(homeSearch&&!homeSearch.getAttribute('aria-label')) homeSearch.setAttribute('aria-label','Rechercher une notion comptable ou fiscale');
    const ficheSearch=document.getElementById('searchFiches');
    if(ficheSearch&&!ficheSearch.getAttribute('aria-label')) ficheSearch.setAttribute('aria-label','Rechercher dans les fiches');

    document.querySelectorAll('.nav-btn').forEach(btn=>{
      if(btn.classList.contains('active')) btn.setAttribute('aria-current','page');
      else btn.removeAttribute('aria-current');
      btn.type='button';
    });

    document.querySelectorAll('.tabs button').forEach(btn=>{
      btn.type='button';
      btn.setAttribute('role','tab');
      btn.setAttribute('aria-selected',btn.classList.contains('active')?'true':'false');
    });

    const dailyBtn=document.getElementById('dailyReveal');
    const dailyAnswer=document.getElementById('dailyAnswer');
    if(dailyBtn&&dailyAnswer){
      dailyBtn.type='button';
      dailyBtn.setAttribute('aria-controls','dailyAnswer');
      dailyBtn.setAttribute('aria-expanded',dailyAnswer.classList.contains('hidden')?'false':'true');
    }

    bindToolButtons();
    setThemeMeta();
  };

  const observer=new MutationObserver(enhanceA11y);
  observer.observe(app,{childList:true,subtree:true});
  enhanceA11y();

  const themeBtn=document.getElementById('themeBtn');
  if(themeBtn){
    themeBtn.type='button';
    themeBtn.addEventListener('click',()=>requestAnimationFrame(setThemeMeta));
  }
})();
