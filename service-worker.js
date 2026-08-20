const CACHE_NAME='deutschpath-unified-5.2.0';
const APP_ASSETS=[
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./levels/a1/index.html",
  "./levels/a1/course-data.js",
  "./levels/a1/course-engine.js",
  "./levels/a2/index.html",
  "./levels/a2/course-data.js",
  "./levels/a2/course-engine.js",
  "./levels/b1/index.html",
  "./levels/b1/course-data.js",
  "./levels/b1/course-engine.js",
  "./levels/b2/index.html",
  "./levels/b2/course-data.js",
  "./levels/b2/course-engine.js"
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&k.startsWith('deutschpath')).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
  const isNav=event.request.mode==='navigate'||event.request.destination==='document';
  if(isNav){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(resp=>{if(resp&&resp.ok){const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,copy))}return resp}).catch(()=>caches.match(event.request).then(x=>x||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(cached=>{
    const fresh=fetch(event.request,{cache:'no-store'}).then(resp=>{if(resp&&resp.ok){const copy=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,copy))}return resp}).catch(()=>null);
    return cached||fresh.then(x=>x||Response.error());
  }));
});
