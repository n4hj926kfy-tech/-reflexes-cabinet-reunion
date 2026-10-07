const CACHE='reflexes-cabinet-ios-v3.4.0';
const ASSETS=['./','./index.html','./styles.css','./accessible-theme.css','./ios-fixes.css','./pro-course.css','./crypto.css','./data.js','./data-zrr-frr.js','./data-structures-pro.js','./data-pro-all.js','./data-zfang-expert.js','./data-cabinet-structures.js','./data-cabinet-fiscal.js','./data-reductions.js','./data-reductions-complement.js','./crypto-meta.js','./crypto-modules.js','./crypto-exercises.js','./crypto-lessons.js','./crypto-v3-data.js','./crypto-audit.js','./crypto-cases.js','./app.js','./app-pro-course.js','./app-crypto-v3.js','./app-crypto-cases.js','./app-crypto.js','./app-accessibility.js','./manifest.webmanifest'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then(response=>{
        if(response&&response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(req,copy));
        }
        return response;
      })
      .catch(async()=>{
        const cached=await caches.match(req);
        if(cached) return cached;
        if(req.mode==='navigate') return caches.match('./index.html');
        throw new Error('Ressource indisponible hors ligne');
      })
  );
});
